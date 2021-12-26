const touristGuidesModel = require("./../../db/models/touristGuides");

const addTouristGuides = (req, res) => {
  const { avter, fname, lname, city, mobile } = req.body;

  const newTouristGuides = new touristGuidesModel({
    avter,
    fname,
    lname,
    city,
    mobile,
  });

  newTouristGuides
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getTouristGuides = (req, res) => {
  touristGuidesModel
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delTouristGuides = async (req, res) => {
  const { touristGuidesId } = req.body;

  try {
    let doc = await touristGuidesModel.updateOne(
      { _id: touristGuidesId },
      { isDel: true }
    );
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addTouristGuides, getTouristGuides, delTouristGuides };
