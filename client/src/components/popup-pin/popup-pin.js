import React from 'react';
import { Typography } from '@material-ui/core';
import { Popup } from 'react-map-gl';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';

const PopupPin = ({
  popup, handleClosePin, isAuthUser, handleDeletePin,
}) => {
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
