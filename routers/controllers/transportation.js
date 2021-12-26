const transportationModel = require("./../../db/models/transportation");

const addTransportation = (req, res) => {
  const { companyName, city, carType, model, image, price } = req.body;

  const newTransportation = new transportationModel({
    companyName,
    city,
    carType,
    model,
    image,
    price,
  });

  newTransportation
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getTransportation = (req, res) => {
  transportationModel
    .find({ isDel: false })
    .then(async (result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delTransportation = async (req, res) => {
  const { transportationId } = req.body;

  try {
    let doc = await transportationModel.updateOne(
      { _id: transportationId },
      { isDel: true }
    );
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addTransportation, getTransportation, delTransportation };
