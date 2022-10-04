const Post = require("../models/Post.model")
const respond = require("../utils/respond")

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    respond(res, 201, "Fetched all posts", posts)
  } catch (e) {
    console.log(e)
    respond(res, 500, "Something went wrong")
  }
}

const getAllUserPosts = async (req, res) => {
  try {
    const { username } = req.user

    const posts = await Post.find({ username })
    respond(res, 201, "Fetched all posts", posts)
  } catch (e) {
    console.log(e)
    respond(res, 500, "Something went wrong")
  }
}

const createPost = async (req, res) => {
  try {
    const { username } = req.user
    const newPost = Post({ ...req.body, username })

    const post = await newPost.save()
    respond(res, 201, "Created new post", post)
  } catch ({ message }) {
    respond(res, 500, "Something went wrong", message)
  }
}

module.exports = {
  getAllPosts,
  createPost,
  getAllUserPosts,
}
