const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
const User = require('../models/User');

const verifyUserToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.OAUTH_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (error) {
    throw new Error('Unatorized');
  }
};

const checkIfUserExist = async email => await User.findOne({ email }).exec();

const createNewUser = async (googleUser) => {
  const { name, email, picture } = googleUser;
  const user = { name, email, picture };
  const newUser = await new User(user).save();
  return newUser;
};

const authCheck = async (token) => {
  const emailUser = await verifyUserToken(token);
  const user = await checkIfUserExist(emailUser.email);
  const newUser = user || await createNewUser(emailUser);
  return newUser;
};

module.exports = authCheck;
