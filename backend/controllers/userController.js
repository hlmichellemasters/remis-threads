const User = require('../models/UserModel');

const getUsers = (req, res) => {
  res.send('Handling product routes from Controller. e.g. get users.');
};

module.exports = getUsers;
