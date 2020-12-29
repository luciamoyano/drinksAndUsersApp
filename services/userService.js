const User = require("../models/userModel");

class UserService {
  getUsers() {
    const query = User.find().exec();
    return query;
  }

  getUserByName(name) {
    const query = User.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = UserService;
