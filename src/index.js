const express = require("express")
const { config } = require("dotenv")
config()

// start the db
require("./db")

// routes
const userRouter = require("./routes/user.route")
const postRouter = require("./routes/post.route")

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/users", userRouter)
app.use("/posts", postRouter)

app.get("/", (req, res) => {
  res.send("Welcome to the api!!!")
})

app.listen(port, console.log(`[server]: Your API is up on port ${port}`))
