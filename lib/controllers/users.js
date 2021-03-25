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
  // .get('/', async (req, res, next) => {
  //   try {
  //     const order = await OrderService.getOrders()
  //     res.send(order);
  //   } catch (error) {
  //     next(error);
  //   }
  // })
  // .get('/:id', async (req, res, next) => {
  //   const id = req.params.id
  //   try {
  //     const order = await OrderService.getOrderById(id);
  //     res.send(order);
  //   } catch (error) {
  //     next(error)
  //   }
  // })
  // .put('/:id', async (req, res, next) => {
  //   const id = req.params.id
  //   const { quantity } = req.body
  //   try {
  //     const order = await OrderService.updateOrder(id, quantity);
  //     res.send(order);
  //   } catch (error) {
  //     next(error)
  //   }
  // })
  // .delete('/:id', async (req, res, next) => {
  //   const id = req.params.id;
  //   try {
  //     const deletedOrder = await OrderService.deleteOrder(id);

  //     res.send(deletedOrder)
  //   } catch (error) {
  //     next(error)
  //   }
  // });
