const User = require('../models/User');

module.exports = class UserService {
  // static async create({ quantity }) {
  //   await sendSms(
  //     process.env.ORDER_HANDLER_NUMBER,
  //     `New Order received for ${quantity}`
  //   );

  //   const order = await Order.insert({ quantity });

  //   return order;
  // }
  static async create(user) {

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

    const updatedUser = await User.updateUserData(id,email, phoneNumber);

    return updatedUser;
  }
  static async deleteUser(id) {

    const deletedUser = await User.deleteUserData(id);

    return deletedUser;
  }

};

