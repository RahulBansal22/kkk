import React, { useState } from 'react';
import './Mailsection.css';
import { FaEnvelope } from "react-icons/fa";

const MailSection = () => {
  const [email, setEmail] = useState('');
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);   
    setIsEmailEntered(e.target.value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the submission of the email
    console.log('Email submitted:', email);
  };

  return (
    <div className="mail-section">
      <div className="left-content">
        {/* Replace 'image.svg' with your actual SVG image */}
        <img src="src/assets/earth.svg" alt="Logo" />
      </div>
      <div className="right-content">
      <h2 className='mapheading'>
          <span className="bold-line">Receive our newsletter.</span><br />
          Sign up for email updates with travel recommendations and Private Deals.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope /> 
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" disabled={!isEmailEntered}>
            Let's do this
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailSection;
