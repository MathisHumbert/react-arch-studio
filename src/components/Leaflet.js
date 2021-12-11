import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const Leaflet = () => {
  const position = [51.505, -0.09];
  const zoom = 5;
  const atlanta = [33.75, -84.38];
  const dallas = [32.78, -96.8];

  return (
    <MapContainer center={[35.15, -90]} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={atlanta}>
        <Popup>
          Main Office <br />
          Address : Atlanta
        </Popup>
      </Marker>
      <Marker position={dallas}>
        <Popup>
          Office II <br />
          Address : Dallas
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Leaflet;
