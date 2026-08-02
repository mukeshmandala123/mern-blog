const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createPost,
  getPosts,
} = require("../controllers/postController");

router.get("/", getPosts);
router.post("/", auth, createPost);

module.exports = router;