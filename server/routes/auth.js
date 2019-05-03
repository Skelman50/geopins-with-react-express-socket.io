const express = require('express');

const route = express.Router();
const authenticate = require('../controllers/auth-controller');


route.post('/', authenticate);


module.exports = route;
