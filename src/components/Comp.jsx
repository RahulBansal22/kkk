import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Comp.css';
import data from '../data.json';

const Comp = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="Boody">
    <h2 className='mapheading'>
          <span className="bold-line">Start your travel planning here</span><br />
          Search Flights, Hotels & Hire Cars
        </h2>
    <div className="table-container">
      {data.map((item, index) => (
        <div key={index} className="dropdown-container">
          <button className="dropdown-button" onClick={() => handleDropdownClick(index)}>
            {item.city} <IoIosArrowDown />
          </button>
          {openDropdown === index && (
            <div className="dropdown-content">
              {item.hotels.map((hotel, hotelIndex) => (
                <div key={hotelIndex} className="hotel-info">
                  <span>{hotel.name}</span>
                  <span>{hotel.price}</span>
                </div>
              ))}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Comp;
