// React core
import React, { useState, useEffect } from 'react';

// Vendor
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// App components
import {
  storeLocationPreference,
  getLocationPreference,
} from '../utils/storage';
import { getHomeLocation, getCurrentLocation } from '../utils/location';

// Styles
import './Map.css';

const Map = () => {
  const [lat, setLat] = useState(50.94544);
  const [lng, setLng] = useState(-1.42896);
  const [zoom, setZoom] = useState(18);
  const [allowedLocation, setAllowedLocation] = useState(false);
  const position = [lat, lng];

  useEffect(() => {
    const allowed = getLocationPreference();
    setAllowedLocation(allowed);
  });

  const handleAllowLocation = () => {
    setAllowedLocation(true);
    storeLocationPreference(true);
  };

  if (allowedLocation) {
    getHomeLocation();
    getCurrentLocation();
    return (
      <div className="Map">
        {/* TODO: add compontent for Location & Location detail */}
        <div className="">
          <div className="top top--left">
            Home location:
            <div id="homeLat" />
            <div id="homeLon" />
          </div>
          {/* <div>
            watch:
            <div id="watchLat" />
            <div id="watchLon" />
          </div> */}
          <div className="top top--right">
            Current location:
            <div id="currentLat" />
            <div id="currentLon" />
          </div>
        </div>

        <LeafletMap center={position} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Home</Popup>
          </Marker>
        </LeafletMap>
      </div>
    );
  } else {
    return (
      <>
        <h1>Uh-oh!</h1>
        <p>This app relies on location</p>

        <button onClick={handleAllowLocation}>
          Allow location to continue
        </button>
      </>
    );
  }
};

export default Map;
