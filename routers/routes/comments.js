const express = require("express");
const {
  addComment,
  delComment,
  getCommentsForArticle,
  getCommentsForUser,
} = require("./../controllers/comments.js");
const comments = express.Router();

comments.post("/add", addComment);
comments.get("/getCommentsForArticle/:id", getCommentsForArticle);
comments.get("/getCommentsForUser/:id", getCommentsForUser);
comments.delete("/del", delComment);

module.exports = comments;
