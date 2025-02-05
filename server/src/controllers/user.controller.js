const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");

exports.createUser = catchAsync(async (req, res) => {
  const { uid, email } = req.body;
  const newUser = await userService.createUser({ uid, email });
  res.status(201).json(newUser);
});
