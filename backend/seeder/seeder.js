const connectDb = require('../config/db');
connectDb();
//
const categoryData = require('./categories');
const productData = require('./products');
const reviewData = require('./reviews');
const userData = require('./users');
const orderData = require('./orders');
const Category = require('../models/CategoryModel');
const Product = require('../models/ProductModel');
const Review = require('../models/ReviewModel');
const User = require('../models/UserModel');
const Order = require('../models/OrderModel');

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();
    await Review.collection.dropIndexes();
    await User.collection.dropIndexes();
    await Order.collection.dropIndexes();
    await Category.collection.deleteMany({});
    await Product.collection.deleteMany({});
    await Review.collection.deleteMany({});
    await User.collection.deleteMany({});
    await Order.collection.deleteMany({});
    await Category.insertMany(categoryData);
    await User.insertMany(userData);
    await Order.insertMany(orderData);
    const reviews = await Review.insertMany(reviewData);
    const products = productData.map((product) => {
      reviews.map((review) => {
        product.reviews.push(review._id);
      });
      return { ...product };
    });

    await Product.insertMany(products);
    console.log('Data import success from seeder.js');
    process.exit();
  } catch (error) {
    console.log('error while processing seeder data', error);
    process.exit(1);
  }
};

importData();
