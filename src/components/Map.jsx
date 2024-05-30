import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../App.css'; 
import { CiHeart } from "react-icons/ci";


import customMarkerImg from '../assets/map.png';
import image1 from '../assets/kannur.jpg';
import image2 from '../assets/riyadh.jpg';
import image3 from '../assets/paro.jpg'; 

const customMarker = new L.Icon({
  iconUrl: customMarkerImg,
  iconSize: [20, 15],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  return (
    <div className="map-container">
      <div className="heading-container">
        <h2 className='mapheading'>
          <span className="bold-line">Explore the world from New Delhi</span><br />
          Find flights departing Mon 24/06/ and returning Mon 01/07/
        </h2>
        
        <div className="see-all-box">
        <button className="border border-black bg-white px-4 py-2">
          <b>See more</b>
        </button>
        </div>
      </div>
      <div className="map-content">
        <MapContainer center={[20, 0]} zoom={2} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[11.8745, 75.3704]} icon={customMarker}>
            <Popup>
              <a href="/kannur" target="_blank" rel="noopener noreferrer"><b>Kannur (₹ 17,448)</b></a>
            </Popup>
          </Marker>
          <Marker position={[24.7136, 46.6753]} icon={customMarker}>
            <Popup>
              <a href="/london" target="_blank" rel="noopener noreferrer"><b>Riyadh (₹ 56,523)</b></a>
            </Popup>
          </Marker>
          <Marker position={[27.4287, 89.4164]} icon={customMarker}>
            <Popup>
              <a href="/new-york" target="_blank" rel="noopener noreferrer"><b>Paro (₹ 56,357)</b></a>
            </Popup>
          </Marker>
        </MapContainer>
        <div className="side-content">
        <hr />
          <div className="image-text-block">
            <img src={image1} alt="Image 1" />
            <div className="image-text">
              <p><b>Kannur</b></p>
              <p>DEL-CNN</p>
              <p><b>₹ 17,448</b></p>
            </div>
            <div className="heart-icon">
              <CiHeart />
            </div>
          </div>
          <hr />
          <div className="image-text-block">
            <img src={image2} alt="Image 2" />
            <div className="image-text">
              <p><b>Riyadh</b></p>
              <p>DEL-RUH</p>
              <p><b>₹ 56,523</b></p>
            </div>
            <div className="heart-icon">
              <CiHeart />
            </div>
          </div>
          <hr />
          <div className="image-text-block">
            <img src={image3} alt="Image 3" />
            <div className="image-text">
              <p><b>Paro</b></p>
              <p>DEL-PBH</p>
              <p><b>₹ 56,357</b></p>
            </div>
            <div className="heart-icon">
              <CiHeart />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Map;
