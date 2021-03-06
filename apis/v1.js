'use strict';
const registerController = require('../server/controllers/apis/register'); 
const loginController = require('../server/controllers/apis/login');
const postsController = require('../server/controllers/apis/posts');
const commentsController = require('../server/controllers/apis/comments');
const express = require('express');
let router = express.Router();
router.use('/register', registerController);
router.use('/login', loginController);
router.use('/posts', postsController);
router.use('/comments', commentsController);
module.exports = router;