import React, { useContext } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { GoogleLogout } from 'react-google-login';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Context from '../../context';

import './signOut.css';

const SignOut = () => {
  const { dispatch } = useContext(Context);
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const onSignOut = () => {
    dispatch({ type: 'SIGNOUT_USER' });
  };
  return (
    <GoogleLogout
      onLogoutSuccess={onSignOut}
      render={({ onClick }) => (
        <span className="root-signOut" onClick={onClick}>
          <Typography
            style={{ display: mobileSize ? 'none' : 'block' }}
            variant="body1"
            className="buttonText-sign-out"
          >
                        SignOut
          </Typography>
          <ExitToAppIcon className="buttonIcon-sign-out" />
        </span>
      )}
    />
  );
};

export default SignOut;
