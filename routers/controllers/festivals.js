const festivals = require("./../../db/models/festivals");

const addFestivals = (req, res) => {
  const { name, city, desc, imges, map, cost } = req.body;

  const newFestivals = new festivals({
    name,
    city,
    desc,
    imges,
    map,
    cost,
  });

  newFestivals
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getFestivals = (req, res) => {
  festivals
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delFestivals = async (req, res) => {
  const { festivalId } = req.body;

  try {
    let doc = await hotels.updateOne({ _id: festivalId }, { isDel: true });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json("Post not found");
  }
};

module.exports = { addFestivals, getFestivals, delFestivals };
