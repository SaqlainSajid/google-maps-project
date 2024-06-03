import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 53.6305,
  lng: -113.6256,
};

const path = [
  {
    lat: 53.6305,
    lng: -113.6256,
  },
  {
    lat: 53.6315,
    lng: -113.6266,
  },
  {
    lat: 53.6325,
    lng: -113.6276,
  },
];

const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAiHNCueZ-A6aLF22tetXdGhU8NPX5p-UY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Polyline path={path} options={{ strokeColor: "#FF0000" }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
