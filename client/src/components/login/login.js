import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Typography from '@material-ui/core/Typography';
import './login.css';
import dotenv from 'dotenv';

dotenv.config();

const Login = ({ onSuccess, onFailure }) => (
  <div className="root">
    <Typography
      component="h1"
      variant="h2"
      gutterBottom
      noWrap
      style={{ color: 'rgb(66, 133, 244' }}
    >
                Welcome
    </Typography>

    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn
      theme="dark"
    />
  </div>
);

export default Login;
