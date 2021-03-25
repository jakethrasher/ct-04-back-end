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

};

