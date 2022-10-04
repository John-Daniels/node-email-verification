const express = require("express")
const { config } = require("dotenv")
config()

// start the db
require("./db")

// routes
const userRouter = require("./routes/user.route")

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/users", userRouter)

app.get("/", (req, res) => {
  res.send("hello world!")
})

app.listen(port, console.log(`[server]: Your API is up on port ${port}`))
