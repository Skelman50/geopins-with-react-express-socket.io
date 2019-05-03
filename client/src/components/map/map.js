import React, { useState, useEffect, useContext } from 'react';
import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Context from '../../context';
import MapMarker from '../marker/marker';
import MapNavigation from '../navigation-control/navigation-control';
import Blog from '../ blog/blog';
import PinsApiService from '../../services/pins-api-service/pins-api-service';
import PinsHistory from '../pins-history/pins-history';
import PopupPin from '../popup-pin/popup-pin';
import dotenv from 'dotenv';

dotenv.config();

const { getAllPins, deletePin } = new PinsApiService();

const INITIAL_VIEWPORT = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13,
};


const Map = () => {
  const [viewPort, setViewPort] = useState(INITIAL_VIEWPORT);
  const [userPosition, setUserPosition] = useState(null);
  const [popup, setPopup] = useState(null);
  const [heightMap, setHeight] = useState('90%');
  const { state, dispatch } = useContext(Context);

  const mobileSize = useMediaQuery('(max-width: 650px)');

  const getUserPosition = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setViewPort({ ...viewPort, latitude, longitude });
        setUserPosition({ latitude, longitude });
      });
    }
  };

  const handleMapClick = ({ lngLat, leftButton }) => {
    setHeight('70%');
    setPopup(null);
    if (!state.draft) {
      dispatch({ type: 'CREATE_DRAFT' });
    }
    const [longitude, latitude] = lngLat;
    dispatch({ type: 'UPDATE_DRAFT', payload: { latitude, longitude } });
  };

  const handleSelectedPin = (pin) => {
    setHeight('70%');
    setPopup(null);
    setTimeout(() => {
      setPopup(pin);
      dispatch({ type: 'SET_PIN', payload: pin });
    });
  };

  const handleDeletePin = async () => {
    setHeight('90%');
    const deletedPin = await deletePin(popup._id);
    socketDeletePin(deletedPin);
  };

  const socketDeletePin = (deletedPin) => {
    const { socket } = state;
    socket.emit('pinDeleted', deletedPin);
  };

  const getPins = async () => {
    const pins = await getAllPins();
    dispatch({ type: 'GET_PINS', payload: pins });
  };

  const highlightNewPin = (pin) => {
    const isNewPin = differenceInMinutes(Date.now(), pin.createdAt) <= 5;
    return isNewPin ? 'limegreen' : 'darkblue';
  };

  const isAuthUser = () => state.currentUser._id === popup.author._id;

  const handleClosePin = () => {
    setHeight('90%');
    setPopup(null);
    dispatch({ type: 'CLOSE_POPUP_PIN' });
  };

  useEffect(() => {
    getUserPosition();
    // eslint-disable-next-line
    }, []);

  useEffect(() => {
    getPins();
    // eslint-disable-next-line
    }, []);

  useEffect(() => {
    setHeight(heightMap);
    setTimeout(() => {
      const pinExist = popup && state.pins.findIndex(pin => pin._id === popup._id) > -1;
      if (!pinExist) {
        setPopup(null);
      }
    }, 300);
    // eslint-disable-next-line
    }, [state.pins.length])

  const styleMap = {
    height: mobileSize ? heightMap : 'calc(100vh - 74px)',
    width: mobileSize ? '100%' : '66%',
  };

  return (
    <div className={mobileSize ? 'map-root-mobile' : 'map-root'}>
      <div style={styleMap}>
        <ReactMapGl
          mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          {...viewPort}
          onViewportChange={newViewport => setViewPort(newViewport)}
          onClick={handleMapClick}
          scrollZoom={!mobileSize}
        >
          <MapNavigation setViewPort={setViewPort} />
          <MapMarker draft={userPosition} color="red" />
          <MapMarker draft={state.draft} color="hotpink" />
          <PinsHistory pins={state.pins} highlightNewPin={highlightNewPin} handleSelectedPin={handleSelectedPin} />
          <div>
            <PopupPin popup={popup} handleClosePin={handleClosePin} isAuthUser={isAuthUser} handleDeletePin={handleDeletePin} />
          </div>
        </ReactMapGl>
      </div>
      <Blog setHeight={setHeight} />
    </div>
  );
};

export default Map;
