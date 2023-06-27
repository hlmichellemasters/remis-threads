const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
    phoneNumber: { type: String },
    address: { type: String },
    country: { type: String },
    zipCode: { type: String },
    city: { type: String },
    state: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
