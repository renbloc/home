const express = require('express');
var router = express.Router();

const CommentController = require('../controllers/comments');

const auth = require('../helpers/auth')


router.post('/post_comment', CommentController.create_comment)

router.get('/get_comments_org', CommentController.get_comments_org)
router.get('/get_comments_user', CommentController.get_comments_user)

router.delete('/delete_post', CommentController.delete_comment)




module.exports = router;