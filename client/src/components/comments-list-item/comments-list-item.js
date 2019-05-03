import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import distanceInWordsNow from 'date-fns/distance_in_words_to_now';

const CommentsListItem = ({ comments }) => (
  <React.Fragment>
    {comments.map((comment, idx) => (
      <ListItem key={idx} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            src={comment.author.picture}
            alt={comment.author.name}
          />
        </ListItemAvatar>
        <ListItemText
          primary={comment.text}
          secondary={(
            <React.Fragment>
              <Typography
                className="comments-inline"
                component="span"
                color="textPrimary"
              >
                {comment.author.name}
              </Typography>
              {distanceInWordsNow(comment.createdAt)}
              {' '}
ago
            </React.Fragment>
)}
        />
      </ListItem>
    ))}
  </React.Fragment>
);

export default CommentsListItem;
