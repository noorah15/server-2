const flightsModel = require("./../../db/models/flights");

const addFlights = (req, res) => {
  const {
    from,
    to,
    flightClass,
    adultTicketPrice,
    childTicketPrice,
    infantTicketPrice,
  } = req.body;

  const newFlights = new flightsModel({
    from,
    to,
    flightClass,
    adultTicketPrice,
    childTicketPrice,
    infantTicketPrice,
  });

  newFlights
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getFlights = (req, res) => {
  flightsModel
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delFlights = async (req, res) => {
  const { flightsId } = req.body;

  try {
    let doc = await flightsModel.updateOne({ _id: flightsId }, { isDel: true });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addFlights, getFlights, delFlights };
