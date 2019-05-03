import React from 'react';
import { Typography } from '@material-ui/core';
import { Popup } from 'react-map-gl';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const PopupPin = ({
  popup, handleClosePin, isAuthUser, handleDeletePin,
}) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  return (
    <div>
      {popup && (
      <Popup
        anchor="top"
        latitude={popup.latitude}
        longitude={popup.longitude}
        closeOnClick={false}
        onClose={() => handleClosePin()}
      >
        <img
          style={{
            height: mobileSize && '100px',
            width: mobileSize && '100px',
            margin: mobileSize && '0, auto',
          }}
          className="popup-image"
          src={popup.image}
          alt={popup.tittle}
        />
        <div className="popup-tab">
          <Typography>
            {popup.latitude.toFixed(6)}
,
            {popup.longitude.toFixed(6)}
          </Typography>
          {isAuthUser() && (
          <Button
            onClick={handleDeletePin}
          >
            <DeleteIcon className="popup-delete-icon" />
          </Button>
          )}
        </div>
      </Popup>
      )}
    </div>
  );
};

export default PopupPin;
