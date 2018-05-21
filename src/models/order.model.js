import db from '../config/db.config';

export const OrderSchema = new db.Schema({
  orderNumber: {
    type: Number,
    default: Math.floor(1000 + (Math.random() * 9000)),
  },
  customer: {
    type: String,
    require: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});
