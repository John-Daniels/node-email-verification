const { Router } = require("express")
const {
  getAllPosts,
  createPost,
  getAllUserPosts,
} = require("../controllers/post.controller")
const { verifyAuthToken } = require("../middleware/auth.middleware")
const Post = require("../models/Post.model")
const respond = require("../utils/respond")
const router = Router()

router.get("/", verifyAuthToken, getAllPosts)
router.get("/me", verifyAuthToken, getAllUserPosts)

// {
//   test: 'Hello world'
// }
router.post("/", verifyAuthToken, createPost)

// TODO: implement, update, delete, like and comment

module.exports = router
