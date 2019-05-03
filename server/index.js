const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const authRoutes = require('./routes/auth');
const pinsRoutes = require('./routes/pins');
const socketActions = require('./sockets/actions');
const path = require('path')
require('./db-config/config')();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/pins', pinsRoutes);

const server = http.createServer(app);
const io = socketIO(server);

socketActions(io);

server.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, '../client', 'build', 'index.html'
      )
    )
  })


module.exports = server;
