import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './Ques.css';
import questions from '../Ques.json';

const Ques = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="Boo">
    <h2 className='mapheading'>
          <span className="bold-line">Frequently asked questions about KAYAK </span><br />
        </h2>
    <div className="ques-container">
      {questions.map((item, index) => (
        <div key={index} className="dropdown-container">
          <button className="dropdown-button" onClick={() => handleDropdownClick(index)}>
            {item.question} <IoIosArrowDown />
          </button>
          {openDropdown === index && (
            <div className="dropdown-content">
              <h5>{item.answer}</h5>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Ques;
