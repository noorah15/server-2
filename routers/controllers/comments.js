const commentsModel = require("./../../db/models/comments");

const addComment = (req, res) => {
  const { userId, destinationId, text } = req.body;

  const newComment = new commentsModel({
    userId,
    destinationId,
    text,
  });

  newComment
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delComment = async (req, res) => {
  const { commentId } = req.body;

  try {
    let doc = await commentsModel.updateOne(
      { _id: commentId },
      { isDel: true }
    );
    if (doc) res.status(200).json(doc);
    else res.status(400).json("Comment not found");
  } catch (err) {
    res.status(400).json("Comment not found");
  }
};

const getCommentsForDestination = (req, res) => {
  const { id } = req.params;
  commentsModel
    .findOne({ destinationId: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getCommentsForUser = (req, res) => {
  const { id } = req.params;
  commentsModel
    .findOne({ userId: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  addComment,
  delComment,
  getCommentsForDestination,
  getCommentsForUser,
};
