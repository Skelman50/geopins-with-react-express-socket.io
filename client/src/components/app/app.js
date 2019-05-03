import React, { useContext, useEffect } from 'react';
import Header from '../header/header';
import Context from '../../context';
import Map from '../map/map';
import socketChange from '../../services/socket-changes-service/socket-changes-service';


const App = () => {
  const { state, dispatch } = useContext(Context);
  const { currentUser } = state;

  useEffect(() => {
    socketChange(state, dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Header
        currentUser={currentUser}
      />
      <Map />
    </React.Fragment>

  );
};

export default App;
