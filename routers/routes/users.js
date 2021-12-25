const express = require("express");
const authentication = require("../middlewares/authentication");
const { adminAuthorization } = require("../middlewares/authorization");

const {
  register,
  login,
  getUsers,
  delUser,
  verify,
  resetPassword,
  completeResetPassword,
} = require("./../controllers/users.js");
const userRouter = express.Router();

userRouter.post("/signup", register);
userRouter.post("/login", login);
userRouter.get("/verify/:id", verify);
userRouter.post("/resetPassword", resetPassword);
userRouter.post("/completeResetPassword/:id", completeResetPassword);

//for admin
userRouter.get("/getUsers", authentication, adminAuthorization, getUsers);
userRouter.delete("/delUsers", authentication, adminAuthorization, delUser);
module.exports = userRouter;
