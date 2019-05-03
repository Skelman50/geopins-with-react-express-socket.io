import React from 'react';

import { Marker } from 'react-map-gl';
import PinIcon from '../pin-icon/pin-icon';

const MapMarker = ({
  draft, color, handleSelectedPin, pin,
}) => {
  if (draft) {
    return (
      <Marker
        {...draft}
        offsetLeft={-19}
        offsetTop={-40}
      >
        <PinIcon
          size={40}
          color={color}
          onClick={() => (handleSelectedPin ? handleSelectedPin(pin) : null)}
        />
      </Marker>
    );
  } return null;
};

export default MapMarker;
