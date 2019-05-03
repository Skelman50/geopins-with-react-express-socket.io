import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import format from 'date-fns/format';
import Context from '../../context';

import './pin-content.css';
import CreateComment from '../create-comment/create-comment';
import Comments from '../comments/comments';

const PinContent = () => {
  const { state } = useContext(Context);
  const {
    title, author, content, createdAt, comments,
  } = state.currentPin;
  return (
    <div className="root-pin-content">
      <Typography
        component="h2"
        variant="h4"
        color="primary"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        className="pin-content-text"
        component="h3"
        variant="h6"
        color="inherit"
        gutterBottom
      >
        <FaceIcon className="pin-content-icon" />
        {' '}
        {author.name}
      </Typography>

      <Typography
        className="pin-content-text"
        variant="subtitle2"
        color="inherit"
        gutterBottom
      >
        <AccessTimeIcon className="pin-content-icon" />
        {format(createdAt, 'MMM Do, YYYY, HH:mm')}
      </Typography>

      <Typography
        variant="subtitle1"
        gutterBottom
      >
        {content}
      </Typography>

      <CreateComment />
      <Comments comments={comments} />
    </div>
  );
};

export default PinContent;
