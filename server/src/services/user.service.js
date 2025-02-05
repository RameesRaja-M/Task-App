const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
class UserService {
  async createUser(userData) {
    const existingUser = await User.findOne({ uid: userData.uid });
    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }
    const user = await User.create(userData);
    return user;
  }

  async getUserByUid(uid) {
    const user = await User.findOne({ uid });
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    return user;
  }

  async getUserByEmail(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    return user;
  }

  async deleteUser(uid) {
    const user = await User.findOneAndDelete({ uid });
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    return user;
  }
}

module.exports = new UserService();
