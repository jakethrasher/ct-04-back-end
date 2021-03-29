const User = require('../models/User');
const { sendEmail } = require('../utils/ses');

module.exports = class UserService {

  static async create(user) {

    await sendEmail(user.email,
      `Welcome, ${user.firstName}. We recieved your information.`)
    const newUser = await User.insert(user);

    return newUser;
  }

  static async getUsers() {

    const users = await User.selectUsers();

    return users;
  }

  static async getSingleUser(id) {

    const users = await User.getUserById(id);

    return users;
  }

  static async updateUserInfo(id,email, phoneNumber) {
    await sendEmail(email,phoneNumber)

    const updatedUser = await User.updateUserData(id,email, phoneNumber);

    return updatedUser;
  }

  static async deleteUser(id) {

    const deletedUser = await User.deleteUserData(id);

    return deletedUser;
  }

};

