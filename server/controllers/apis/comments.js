'use strict';
const express = require('express');
const passport = require('passport');
const commentsService = require('../../services/comments/comments');
let router = express.Router();
router.post('/',passport.authenticate('jwt', { session: false }), commentsService.createComment);
router.get('/:_id', commentsService.getCommentDetails);
router.get('/posts/:post', commentsService.getAllCommentsByPostId);
//router.get('/:_id', postsService.getPostById);
//router.put('/:_id', postsService.updatePostById);
//router.delete('/:_id',postsService.deletePostById)
module.exports = router;