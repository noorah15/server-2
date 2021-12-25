const express = require("express");
const {
  addComment,
  delComment,
  getCommentsForDestination,
  getCommentsForUser,
} = require("./../controllers/comments.js");
const comments = express.Router();

comments.post("/add", addComment);
comments.get("/getCommentsForDestination/:id", getCommentsForDestination);
comments.get("/getCommentsForUser/:id", getCommentsForUser);
comments.delete("/del", delComment);

module.exports = comments;
