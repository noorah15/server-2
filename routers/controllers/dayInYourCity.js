const dayInYourCityModel = require("./../../db/models/dayInYourCity");

const addDayInYourCity = (req, res) => {
  const { name, city, desc, cost, expiryDate, timeStart, timeFinish, catg } =
    req.body;

  const newDayInYourCity = new dayInYourCityModel({
    name,
    city,
    desc,
    cost,
    expiryDate,
    timeStart,
    timeFinish,
    catg,
  });

  newDayInYourCity
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

const getDayInYourCity = (req, res) => {
  dayInYourCityModel
    .find({ isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getDayInYourCityById = (req, res) => {
  const { id } = req.params;
  dayInYourCityModel
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// const getDestinationByCatg = (req, res) => {
//   const { catg } = req.params;
//   destinations
//     .findOne({ catg, isDel: false })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// };

// const getDestinationByDays = (req, res) => {
//   const { days } = req.params;
//   destinations
//     .findOne({ days, isDel: false })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// };

// const getDestinationByCity = (req, res) => {
//   const { city } = req.params;
//   destinations
//     .findOne({ city, isDel: false })
//     .then((result) => {
//       res.status(200).json(result);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// };

// const updateDestination = async (req, res) => {
//   try {
//     const {
//       destinationId,
//       festivalIds,
//       name,
//       city,
//       cost,
//       days,
//       catg,
//       isItSuitableForFamily,
//     } = req.body;
//     let doc = "";
//     if (festivalIds !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { festivalIds: festivalIds }
//       );
//     }
//     if (name !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { name: name }
//       );
//       console.log(doc);
//     }

//     if (city !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { city: city }
//       );
//       console.log(doc);
//     }

//     if (cost !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { cost: cost }
//       );
//       console.log(doc);
//     }

//     if (days !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { days: days }
//       );
//       console.log(doc);
//     }

//     if (catg !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { catg: catg }
//       );
//       console.log(doc);
//     }

//     if (isItSuitableForFamily !== undefined) {
//       doc = await destinations.updateOne(
//         { _id: destinationId },
//         { isItSuitableForFamily: isItSuitableForFamily }
//       );
//       console.log(doc);
//     }

//     res.status(200).json(doc);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

const delDayInYourCity = async (req, res) => {
  const { dayInYourCityId } = req.body;

  try {
    let doc = await dayInYourCityModel.updateOne(
      { _id: dayInYourCityId },
      { isDel: true }
    );
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  addDayInYourCity,
  getDayInYourCity,
  getDayInYourCityById,
  delDayInYourCity,
};
