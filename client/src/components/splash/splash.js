import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../login/login';
import authService from '../../services/authenticate/auth-service';
import Context from '../../context';

const Splash = () => {
  const { dispatch, state } = useContext(Context);

  const onSuccess = async (googleUser) => {
    try {
      const idToken = googleUser.getAuthResponse().id_token;
      const { data } = await authService(idToken);
      dispatch({ type: 'LOGIN_USER', payload: data });
      dispatch({ type: 'IS_LOGGED_IN', payload: googleUser.isSignedIn() });
    } catch (error) {
      dispatch({ type: 'IS_LOGGED_IN', payload: false });
    }
  };

  const onFailure = (res) => {
    console.log(res)
    dispatch({ type: 'IS_LOGGED_IN', payload: false });
  };

  const content = () => {
    if (!state.isAuth) {
      return (
        <Login
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      );
    }
    return <Redirect to="/" />;
  };

  return (
    content()
  );
};

export default Splash;
