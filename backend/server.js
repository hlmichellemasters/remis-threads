const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');

app.get('/', (req, res, next) => {
  res.json({ message: 'API running' });
  next();
});

// mongodb connection
const connectDB = require('./config/db');
connectDB();

app.use('/api', apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
