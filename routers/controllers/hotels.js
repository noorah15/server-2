const hotels = require("./../../db/models/hotels");
const hotelInfo = require("./../../db/models/hotelInfo");

const addHotels = (req, res) => {
  const { name, city, desc, imges, map, moreInfo, reviews } = req.body;

  const newHotel = new hotels({
    name,
    city,
    desc,
    imges,
    map,
    moreInfo,
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

const addHotelInfo = (req, res) => {
  const { hotelId, cost, roomType } = req.body;

  const newHotelInfo = new hotelInfo({ hotelId, cost, roomType });

  newHotelInfo
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
    .then(async (result) => {
      let getHotelInfo = await hotelInfo.find({});

      res.status(200).json({ result, getHotelInfo });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { addHotels, addHotelInfo, getHotels };
