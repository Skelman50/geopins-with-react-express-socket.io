import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MapIcon from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import './header.css';
import SignOut from '../signOut/signOut';


const UsersData = ({ currentUser }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  if (currentUser) {
    return (
      <div className="grow">
        <img
          className="picture"
          src={currentUser.picture}
          alt={currentUser.name}
        />
        <Typography
          className={mobileSize ? 'mobile' : null}
          component="h1"
          variant="h5"
          color="inherit"
          noWrap
        >
          {currentUser.name}
        </Typography>
      </div>
    );
  }
};

const Header = ({ currentUser }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  return (
    <div className="root-header">
      <AppBar position="static">
        <Toolbar style={{ background: 'rgb(153,50,204)' }}>
          <div className="grow">
            <MapIcon className="icon" />
            <Typography
              className={mobileSize ? 'mobile' : null}
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
            >
                            GeoPins
            </Typography>
          </div>
          <UsersData currentUser={currentUser} />
          <SignOut />
        </Toolbar>
      </AppBar>
    </div>

  );
};

export default Header;
