const mongoose = require('mongoose');
const User = require('./UserModel');

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    orderTotal: {
      itemsCount: { type: Number, required: true },
      cartSubtotal: { type: Number, required: true },
    },
    cartItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { path: { type: String, required: true } },
        quantity: { type: Number, required: true },
        count: { type: Number, required: true },
      },
    ],
    transactionResult: {
      status: { type: String },
      createTime: { type: String },
      amount: { type: String },
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
