const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db.js");

const app = express();
app.use(express.json()); //{ limit: "50mb" }
app.use(cors());

const role = require("./routers/routes/role");
app.use("/role", role);

const user = require("./routers/routes/user");
app.use("/user", user);

const hotels = require("./routers/routes/hotels");
app.use("/hotels", hotels);

const comments = require("./routers/routes/comments");
app.use("/comments", comments);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
