// React core
import React, { Component } from 'react';

// Vendor
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// App components
import { getLocation } from '../location';

// Styles
import './Map.css';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      lat: 50.94544,
      lng: -1.42896,
      zoom: 18,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    getLocation();
    return (
      <div className="Map">
        <div id="startLat" />
        <div id="startLon" />
        <LeafletMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </LeafletMap>
      </div>
    );
  }
}
