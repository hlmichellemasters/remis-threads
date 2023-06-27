const mongoose = require('mongoose');
const Review = require('./ReviewModel');
const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
      unique: true,
      trim: true,
      maxLength: [100, 'Product name cannot exceed 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please enter product price'],
    },
    count: {
      type: Number,
      required: [true, 'Please enter product count'],
    },
    description: {
      type: String,
      required: [true, 'Please enter product description'],
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewsNumber: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attributes: [
      {
        key: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Review,
      },
    ],
    category: {
      type: String,
      required: [true, 'Please enter product category'],
    },
  },
  { timestamps: true }
);

productSchema.index(
  { name: 'text', description: 'text' },
  { name: 'TextIndex' }
);
productSchema.index(
  { 'attributes.key': 1, 'attributes.value': 1 },
  { name: 'AttributesIndex' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
