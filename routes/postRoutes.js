const express = require('express');
const postController = require("'../constrollers/postControllers");
const router = express.Router();



//@ROUTE GET && POST - /posts/
router.route("/").get(postControllers.getAllPosts).post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostByID);

module.exports = router;