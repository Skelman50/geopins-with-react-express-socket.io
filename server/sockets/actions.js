const socketActions = (io) => {
  io.on('connection', (socket) => {
    socket.on('pinCreated', (pin) => {
      io.emit('showNewPin', pin);
    });
    socket.on('pinDeleted', (deletedPin) => {
      io.emit('updatedAfterDelete', deletedPin);
    });
    socket.on('createComment', (comment) => {
      io.emit('commentsUpdate', comment);
    });
  });
};

module.exports = socketActions;
