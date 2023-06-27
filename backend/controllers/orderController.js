const Order = require('../models/OrderModel');

const getOrders = (req, res) => {
  res.send('Handling product routes from Controller. e.g. get orders.');
};

module.exports = getOrders;
