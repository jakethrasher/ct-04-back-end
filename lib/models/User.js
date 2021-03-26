const pool = require('../utils/pool');

// static methods -> Order.insert(): Math.random(), Number.parseInt(), JSON.stringify()
// instance methods -> arr.map(), params.get('code')
module.exports = class User {
  id;
  firstName;
  lastName;
  email;
  phoneNumber;

  constructor(row) {
    this.id = row.id;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
    this.email = row.email;
    this.phoneNumber = row.phone_number
  }

  static async insert(user) {
    const {
      rows,
    } = await pool.query(
      `INSERT INTO users 
      (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4) 
      RETURNING *`,
      [user.firstName, user.lastName, user.email, user.phoneNumber]
    );

    return new User(rows[0]);
  }
  static async selectUsers() {
    const {
      rows,
    } = await pool.query(
      `SELECT *
       FROM users`,
    );

    return rows.map(user => new User(user));
  }
  static async getUserById(id) {
    const {
      rows,
    } = await pool.query(
      `SELECT *
       FROM users
       WHERE id = $1`,
       [id]
    );

    return new User(rows[0]);
  }
  static async updateUserData(id,email, phoneNumber) {
    const {
      rows,
    } = await pool.query(
      `UPDATE users
       SET email = $1, phone_number = $2
       WHERE id = $3
       RETURNING *`
       ,
       [email,phoneNumber,id]
    );

    return new User(rows[0]);
  }
  static async deleteUserData(id) {
    const {
      rows,
    } = await pool.query(
      `DELETE FROM users
       WHERE id = $1
       RETURNING *`
       ,
       [id]
    );

    return new User(rows[0]);
  }

};
