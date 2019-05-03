import React from 'react';
import { NavigationControl } from 'react-map-gl';
import './navigation-control.css';

const MapNavigation = ({ setViewPort }) => (
  <div className="navigationControl">
    <NavigationControl
      onViewportChange={newViewport => setViewPort(newViewport)}
    />
  </div>
);

export default MapNavigation;
