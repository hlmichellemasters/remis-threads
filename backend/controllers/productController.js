const Product = require('../models/ProductModel');
const recordsPerPage = require('../config/pagination');

const getProducts = async (req, res, next) => {
  try {
    // limit needed for pagination
    const products = await Product.find({})
      .sort({ name: 'asc' })
      .limit(recordsPerPage)
      .orFail();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
