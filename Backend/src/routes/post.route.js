const { Router } = require("express");
const post_router = Router();
const post_controller = require('../controller/post.controller');

//create-post
post_router.post('/create-post', post_controller.ctreate_post);
//get-all-post
post_router.get('/get-all-post', post_controller.getAllPosts);

module.exports = post_router;
