const Comment = require('../models/Comment');

// Get comments for a post
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('author', 'username email');

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a comment
exports.createComment = async (req, res) => {
  try {
    const { text, author, post } = req.body;

    const comment = await Comment.create({
      text,
      author,
      post,
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};