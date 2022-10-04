const { Router } = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/User.model")
const respond = require("../utils/respond")
const router = Router()

router.get("/", async (req, res) => {
  const users = await User.find({})

  res.send(users)
})

// {
//   username: 'John Daniels',
//   email: 'adeyemijohndaniels@gmail.com'
//   password: '1234567890'
// }
router.post("/signup", async (req, res) => {
  try {
    const credentials = { ...req.body, isVerified: false }
    const user = User(credentials)

    await user.save()

    await user.verify()
    res.status(201).send(user)
    // send verification mail here
  } catch (e) {
    console.log(e)
    respond(res, 500, "something went wrong")
  }
})

// {
//   username: 'John Daniels',
//   password: '1234567890'
// }
router.post("/login", async (req, res) => {
  try {
    const credentials = req.body

    // verification wall
    const user = await User.findOne({ email: credentials.email })
    if (!user) return respond(res, 404, "Couldn'nt find any user ...")

    // if we are here --- that means that the user is available.... so lets check for verification
    if (user.isVerified !== true)
      return respond(res, 403, "Pls verify your account b4 you login") // this is a custom one for login...

    // so if we are here... it means the user is verified, now we can login :)
    const userDetails = await User.login(credentials)
    respond(res, 200, "successfully logged in", userDetails)
  } catch (e) {
    console.log(e)
    respond(res, 500, "something went wrong")
  }
})

// /verificatiion?token=askdfr0i2dfksad;lkfpqdwiafisdfjds
router.post("/verification", async (req, res) => {
  try {
    const token = req.query.token

    // check if it exists
    if (!token) return respond(res, 400, "token is required")

    // check if it's valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) return respond(res, 400, "token is required")

    const user = await User.findOne({ _id: decoded._id })
    if (!user) return respond(res, 404, "This user does not exist")

    if (user.isVerified) return respond(res, 200, "Nothing todo here")

    user.isVerified = true
    user.save()

    respond(res, 200, "You have successfully verified your email")
  } catch (e) {
    if (e.name === "TokenExpiredError")
      return respond(
        res,
        400,
        "Your token has expired, pls request for a new one"
      )

    respond(res, 400, "Unable to verify, Please try again", e)
  }
})

// /verification/request/?email=test@gmail.com
router.post("/verification/request", async (req, res) => {
  try {
    const email = req.query.email

    if (!email) return respond(res, 400, "the email is required")

    const user = await User.findOne({ email })
    if (!user) return respond(res, 404, "This user does not exist")

    await user.verify()
    respond(res, 200, "Successfully processed your request")
  } catch (e) {
    respond(res, 500, "something went wrong")
  }
})

module.exports = router
