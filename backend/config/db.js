require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
//
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    });
    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.error('error connecting MongoDB: ', error);
    process.exit(1);
  }
};

module.exports = connectDB;
