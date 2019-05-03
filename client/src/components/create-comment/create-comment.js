import React, { useState, useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import './create-comment.css';
import PinsApiService from '../../services/pins-api-service/pins-api-service';
import Context from '../../context';

const { createComment } = new PinsApiService();

const CreateComment = () => {
  const [comment, setComment] = useState('');
  const { state } = useContext(Context);

  const handleSubmitComment = async () => {
    const commentData = {
      text: comment,
    };
    const { _id } = state.currentPin;
    const response = await createComment(_id, commentData);
    createCommentSocket(response);
    setComment('');
  };

  const createCommentSocket = (comment) => {
    const { socket } = state;
    socket.emit('createComment', comment);
  };

  return (
    <React.Fragment>
      <form className="create-comment-form">
        <IconButton
          disabled={!comment.trim()}
          className="create-comment-clear-button"
          onClick={() => setComment('')}
        >
          <ClearIcon />
        </IconButton>
        <InputBase
          className="create-comment-input"
          multiline
          placeholder="Add comment"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />

        <IconButton
          disabled={!comment.trim()}
          className="create-comment-send-button"
          onClick={handleSubmitComment}
        >
          <SendIcon />
        </IconButton>
      </form>
      <Divider />
    </React.Fragment>
  );
};

export default CreateComment;
