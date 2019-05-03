require('dotenv').config();
const authCheck = require('../middleware/auth-check');

const authenticate = async (req, res) => {
  try {
    const user = await authCheck(req.headers.authorization);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json(error.message);
  }
};


module.exports = authenticate;
