const { Router } = require('express');
const UserService = require('../services/UserService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const newUser = await UserService.create(req.body);
      res.send(newUser);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const users = await UserService.getUsers()
      res.send(users);

    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      const user = await UserService.getSingleUser(id);
      res.send(user);
    } catch (error) {
      next(error)
    }
  })
  .put('/:id', async (req, res, next) => {
    const id = req.params.id
    const { email, phoneNumber} = req.body
    try {
      const data = await UserService.updateUserInfo(id, email, phoneNumber);
      res.send(data);
    } catch (error) {
      next(error)
    }
  })
  .delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const deletedUser = await UserService.deleteUser(id);

      res.send(deletedUser)
    } catch (error) {
      next(error)
    }
  });
