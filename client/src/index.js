import React, { useContext, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import App from './components/app/app';
import Splash from './components/splash/splash';
import Context from './context';
import reducer from './reducer';
import ProtectedRoute from './components/helpers/protected-route';

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  let socket;

  useEffect(() => {
    // eslint-disable-next-line
    socket = io()
    dispatch({ type: 'SET_SOCKET', payload: socket });
  }, []);


  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <ProtectedRoute exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
