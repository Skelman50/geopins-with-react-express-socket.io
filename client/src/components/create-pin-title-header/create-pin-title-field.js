import React from 'react';
import Typography from '@material-ui/core/Typography';
import LandscapeIcon from '@material-ui/icons/LandscapeOutlined';

const CreatePinTitleHeader = () => (
  <Typography
    className="align-center-create-pin"
    component="h2"
    variant="h4"
    color="secondary"
  >
    <LandscapeIcon className="icon-large-create-pin" />
    {' '}
Pin Location
  </Typography>
);

export default CreatePinTitleHeader;
