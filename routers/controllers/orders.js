const ordersModel = require("./../../db/models/orders");

const addOrder = (req, res) => {
  const { userId, destinationId, transportationId, hotel, ticket, price } =
    req.body;

  const newOrder = new ordersModel({
    userId,
    destinationId,
    transportationId,
    hotel,
    ticket,
    price,
  });

  newOrder
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getOrders = (req, res) => {
  ordersModel
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delOrder = async (req, res) => {
  const { orderId } = req.body;

  try {
    let doc = await ordersModel.updateOne({ _id: orderId }, { isDel: true });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addOrder, getOrders, delOrder };
