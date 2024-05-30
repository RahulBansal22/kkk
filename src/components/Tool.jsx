import React from 'react';
import './Tool.css';

const Tool = () => {
  return (
    <div className="tool-container">
     <h2 className='mapheading'>
          <span className="bold-line">Popular tools </span><br />
          Make your next trip a breeze
        </h2>
      <div className="images-container">
        <div className="image-block">
          <img src="src/assets/price.png" alt="First" className="image"/>
          <h3 className="caption"><b>Price Alerts</b></h3>
        </div>
        <div className="image-block">
          <img src="src/assets/plane.png" alt="Second" className="image"/>
          <h3 className="caption"><b>Flight Trackers</b></h3>
        </div>
      </div>
    </div>
  );
}

export default Tool;
