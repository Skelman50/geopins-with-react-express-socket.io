import React from 'react';
import MapMarker from '../marker/marker';


const PinsHistory = ({ pins, highlightNewPin, handleSelectedPin }) => {
  const pinsHistory = pins.map(pin => (
    <MapMarker
      key={pin._id}
      draft={pin}
      color={highlightNewPin(pin)}
      handleSelectedPin={handleSelectedPin}
      pin={pin}
    />
  ));
  return pinsHistory;
};

export default PinsHistory;
