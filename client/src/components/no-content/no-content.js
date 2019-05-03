import React from 'react';

import ExploreIcon from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';

import './no-content.css';

const NoContent = () => (
  <div className="no-content-root">
    <ExploreIcon className="no-content-icon" />
    <Typography
      noWrap
      component="h2"
      variant="h6"
      align="center"
      color="textPrimary"
      gutterBottom
    >
                Click on the map to add Pin
    </Typography>
  </div>
);

export default NoContent;
