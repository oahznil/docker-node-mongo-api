import logger from '../config/log.config';
import db from '../config/db.config';
import {
  OrderSchema,
} from '../models/order.model';

const Order = db.model('Order', OrderSchema);

const getOrdersAsync = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    logger.error(`getOrdersAsync failed : ${JSON.stringify(error)}`);
  }
};

const getOrderByIdAsync = async (req, res) => {
  try {
    const order = await Order.findOne({
      orderNumber: req.params.id,
    });
    res.status(200).send(order);
  } catch (error) {
    logger.error(`getOrderByIdAsync with orderId ${req.params.id} failed : ${JSON.stringify(error)}`);
  }
};


const createOrderAsync = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save((err) => {
      if (err) {
        logger.error(`Create order failed: ${JSON.stringify(err)}`);
      }
    });
    res.status(200).send(newOrder);
  } catch (error) {
    logger.error(`createOrderAsync failed : ${JSON.stringify(error)}`);
  }
};


const updateOrdersAsync = async (req, res) => {
  try {
    const updateOrder = req.body;
    const options = {
      upsert: true,
      new: true,
    };
    await Order.findOneAndUpdate({
      orderNumber: req.params.id,
    }, options);
    res.status(200).send(updateOrder);
  } catch (error) {
    logger.error(`updateOrdersAsync with orderId ${req.params.id} failed : ${JSON.stringify(error)}`);
  }
};


const deleteOrdersAsync = async (req, res) => {
  try {
    await Order.remove({
      orderNumber: req.params.id,
    });
    res.status(200).send(req.params.id);
  } catch (error) {
    logger.error(`deleteOrdersAsync with orderId ${req.params.id} failed : ${JSON.stringify(error)}`);
  }
};

export default {
  getOrdersAsync,
  getOrderByIdAsync,
  createOrderAsync,
  updateOrdersAsync,
  deleteOrdersAsync,
};
