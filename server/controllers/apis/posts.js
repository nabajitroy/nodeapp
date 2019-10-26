'use strict';
const express = require('express');
const passport = require('passport');
const postsService = require('../../services/posts/posts');
let router = express.Router();
router.post('/',passport.authenticate('jwt', { session: false }), postsService.createPost);
router.get('/', postsService.getPosts);
router.get('/:_id', postsService.getPostById);
router.put('/:_id', postsService.updatePostById);
router.delete('/:_id',postsService.deletePostById)
module.exports = router;