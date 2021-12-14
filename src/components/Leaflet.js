import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useGlobalContext } from '../context';

const Leaflet = () => {
  const { zoom, position } = useGlobalContext();
  const [map, setmap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(
    () => {
      if (loading) return;
      map.setZoom(zoom);
    }, // eslint-disable-next-line
    [zoom]
  );

  useEffect(
    () => {
      if (loading) return;
      map.flyTo(position);
    },
    // eslint-disable-next-line
    [position]
  );

  const atlanta = [33.75, -84.38];
  const dallas = [32.78, -96.8];

  return (
    <>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        whenCreated={setmap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={atlanta}>
          <Popup>
            Main Office <br />
            Address : Atlanta <br />
          </Popup>
        </Marker>
        <Marker position={dallas}>
          <Popup>
            Office II <br />
            Address : Dallas
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Leaflet;
