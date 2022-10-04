const { Router } = require("express")
const { verifyAuthToken } = require("../middleware/auth.middleware")
const Post = require("../models/Post.model")
const router = Router()

router.get("/", verifyAuthToken, (req, res) => {
  const posts = Post.find()
  res.send(posts)
})

router.post("/new", (req, res) => {
  const posts = Post.find()
  res.send(posts)
})

module.exports = router
