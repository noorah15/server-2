const hotels = require("./../../db/models/hotels");

const addHotels = (req, res) => {
  const { name, city, desc, imges, map, moreInfo, hotelInfo, reviews } =
    req.body;

  const newHotel = new hotels({
    name,
    city,
    desc,
    imges,
    map,
    moreInfo,
    hotelInfo,
    reviews,
  });

  newHotel
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getHotels = (req, res) => {
  hotels
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const delHotel = async (req, res) => {
  const { hotelId } = req.body;

  try {
    let doc = await hotels.updateOne({ _id: hotelId }, { isDel: true });
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { addHotels, getHotels, delHotel };
