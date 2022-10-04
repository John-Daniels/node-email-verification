const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("posts", postSchema)

module.exports = Post
