const destinations = require("./../../db/models/destinations");

const addDestinations = (req, res) => {
  const {
    userId,
    festivalIds,
    name,
    city,
    cost,
    days,
    catg,
    isItSuitableForFamily,
  } = req.body;

  const newDestinations = new destinations({
    userId,
    festivalIds,
    name,
    city,
    cost,
    days,
    catg,
    isItSuitableForFamily,
  });

  newDestinations
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getDestinations = (req, res) => {
  destinations
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getDestinationById = (req, res) => {
  const { id } = req.params;
  destinations
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getDestinationByCatg = (req, res) => {
  const { catg } = req.params;
  destinations
    .findOne({ catg, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getDestinationByDays = (req, res) => {
  const { days } = req.params;
  destinations
    .findOne({ days, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getDestinationByCity = (req, res) => {
  const { city } = req.params;
  destinations
    .findOne({ city, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delDestination = async (req, res) => {
  const { destinationId } = req.body;

  try {
    let doc = await hotels.updateOne({ _id: destinationId }, { isDel: true });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addDestinations,
  getDestinations,
  getDestinationById,
  getDestinationByCatg,
  getDestinationByDays,
  getDestinationByCity,
  delDestination,
};
