// React core
import React, { useState, useEffect } from 'react';

// Vendor
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// App components
import {
  storeLocationPreference,
  getLocationPreference,
  storeWalkLocation,
  getWalkLocations,
} from '../utils/storage';
import {
  getHomeLocation,
  startCurrentLocationTracking,
  stopCurrentLocationTracking,
} from '../utils/location';

// Styles
import './Map.css';

const Map = () => {
  const [homeLat, setHomeLat] = useState(0);
  const [homeLng, setHomeLng] = useState(0);

  const [lat, setLat] = useState(homeLat);
  const [lng, setLng] = useState(homeLng);
  const [zoom, setZoom] = useState(18);
  const allowed = getLocationPreference();
  const [allowedLocation, setAllowedLocation] = useState(!!allowed);
  const position = [lat, lng];

  const [watchId, setWatchId] = useState(0);

  // This is used only for debugging purposes
  const [wlDebugging, setWlDebugging] = useState();

  useEffect(() => {
    setAllowedLocation(allowed);
  });

  const handleAllowLocation = () => {
    setAllowedLocation(true);
    storeLocationPreference(true);
  };

  const handleStartTracking = () => {
    getHomeLocation(homeLocationCallback);
    startCurrentLocationTracking(newLocationCallback);
  };
  const handleStopTracking = () => {
    stopCurrentLocationTracking(watchId);
  };

  const homeLocationCallback = position => {
    setHomeLat(position.coords.latitude);
    setHomeLng(position.coords.longitude);
  };

  const newLocationCallback = (position, id) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
    setWatchId(id);
    storeWalkLocation(position);
    // TODO: remove this code after testing Chrome on Android increasing the number of locations when the screen is off
    const wlDebugging = getWalkLocations();
    setWlDebugging(wlDebugging.length);
  };

  if (allowedLocation) {
    return (
      <div className="Map">
        {/* TODO: add compontent for Location & Location detail */}
        <div className="">
          <div className="top top--left">
            {!homeLat && !homeLng ? (
              <button onClick={handleStartTracking}>Start!</button>
            ) : (
              <>
                Home location:
                <div>{homeLat}</div>
                <div>{homeLng}</div>
                <button onClick={handleStopTracking}>Stop!</button>
              </>
            )}
            We've got {wlDebugging} locations!
          </div>
          <div className="top top--right">
            Current location:
            <div>{lat}</div>
            <div>{lng}</div>
          </div>
        </div>

        <LeafletMap center={position} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>You're here!</Popup>
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
