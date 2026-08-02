const express = require('express');
const router = express.Router();

const {
  getComments,
  createComment,
  deleteComment,
} = require('../controllers/commentController');

router.get('/:postId', getComments);
router.post('/', createComment);
router.delete('/:id', deleteComment);

module.exports = router;