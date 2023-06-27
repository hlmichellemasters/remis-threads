const Product = require('../models/ProductModel');
const recordsPerPage = require('../config/pagination');
const isEmptyObject = require('../utils/helpers');

const getProducts = async (req, res, next) => {
  try {
    let filter = {};
    console.log('params include: ', req.params);
    // filter price, rating, category, or attributes etc.
    let priceFilter = {};
    if (req.query.price) {
      priceFilter = { price: { $lte: Number(req.query.price) } };
    }
    let ratingFilter = {};
    if (req.query.rating) {
      ratingFilter = { rating: { $in: req.query.rating.split(',') } };
    }
    let categoryFilter = {};
    const categoryName = req.params.categoryName || '';
    if (categoryName) {
      let a = categoryName.replaceAll(',', '/');
      console.log(a);
      var categoryRegEx = new RegExp('^' + a);
      categoryFilter = { category: categoryRegEx };
    }

    if (req.query.category) {
      let a = req.query.category.split(',').map((item) => {
        if (item) return new RegExp('^' + item);
      });
      categoryFilter = { category: { $in: a } };
    }

    console.log(
      'filters are set?' +
        (!isEmptyObject(priceFilter) ||
          !isEmptyObject(ratingFilter) ||
          !isEmptyObject(categoryFilter))
    );
    if (
      !isEmptyObject(priceFilter) ||
      !isEmptyObject(ratingFilter) ||
      !isEmptyObject(categoryFilter)
    ) {
      filter = {
        $and: [priceFilter, ratingFilter, categoryFilter],
      };
    }

    console.log(filter);

    // pagination
    const pageNum = Number(req.query.pageNum) || 1;

    // sort by name, price, etc.
    let sort = {};
    const sortOptions = req.query.sort || '';
    if (sortOptions) {
      let sortOptionsArray = sortOptions.split('_');
      sort = { [sortOptionsArray[0]]: Number(sortOptionsArray[1]) };
    }

    const totalNumProducts = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .skip(recordsPerPage * (pageNum - 1))
      .sort(sort)
      .limit(recordsPerPage);
    res.json({
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalNumProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
