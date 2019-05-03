const socketChange = ({ socket }, dispatch) => {
  socket.on('showNewPin', (newPin) => {
    dispatch({ type: 'PIN_CREATED', payload: newPin });
  });

  socket.on('updatedAfterDelete', (deletedPin) => {
    dispatch({ type: 'PIN_DELETED', payload: deletedPin });
  });

  socket.on('commentsUpdate', (comment) => {
    dispatch({ type: 'CREATE_COMMENT', payload: comment });
  });
};

export default socketChange;
