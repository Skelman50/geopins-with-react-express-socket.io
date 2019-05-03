const express = require('express');

const route = express.Router();
const {
  createNewPin, getAllPins, deletePin, createComment,
} = require('../controllers/pins-controllers/pins-controllers');

route.post('/', createNewPin);

route.get('/', getAllPins);

route.delete('/:id', deletePin);

route.put('/comments/:id', createComment);

module.exports = route;
