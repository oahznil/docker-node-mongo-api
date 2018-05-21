import db from '../config/db.config';

export let OrderSchema = new db.Schema({
  orderNumber: {
    type: Number,
    require: true,
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
