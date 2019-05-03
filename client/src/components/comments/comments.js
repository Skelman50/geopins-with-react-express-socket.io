import React from 'react';
import List from '@material-ui/core/List';
import CommentsListItem from '../comments-list-item/comments-list-item';
import './comments.css';


const Comments = ({ comments }) => (
  <List className="root-comments">
    <CommentsListItem comments={comments} />
  </List>
);

export default Comments;
