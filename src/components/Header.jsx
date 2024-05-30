import React from 'react';
import { FaHeart } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMenu } from "react-icons/io5"; // IoMenu icon
import headerImage from '../assets/kayak.png';
import smallLogoImage from '../assets/k.png';
import logoImage1 from '../assets/logo1.png';
import logoImage2 from '../assets/logo2.png';
import logoImage3 from '../assets/logo3.png';
import logoImage4 from '../assets/logo4.png';
import Booking from "./Booking";
import Sidebar from './Sidebar';
import './Header.css';

const Header = ({ onToggle }) => {
  return (
    <div className="header-container">
      <div className="sidebar">
        <Sidebar onToggle={onToggle} />
      </div>
      <div className="header-content">
        <header className="w-full px-1">
          <nav className="flex items-center justify-between max-w-10xl mx-auto">
            <div className="flex items-center">
              <button className="menu-button" onClick={() => onToggle(true)}>
                <IoMenu className="menu-icon" />
              </button>
              <picture>
                <source media="(max-width: 600px)" srcSet={smallLogoImage} />
                <img src={headerImage} alt="Header" className="header-image" />
              </picture>
            </div>
            <div className="flex items-center">
              <FaHeart style={{ marginRight: '8px' }} />
              <button className="sign-in-button" onClick={() => onToggle(true)}>
                <BiSolidUserCircle className="user-icon" /> <span className="sign-in-text">Sign in</span>
              </button>
            </div>
          </nav>
          <hr className="header-line" />
          <h1 className="big-bold"><b>Where do you want to go?</b></h1>
          <Booking />
          <h2 className="sub-heading"><b>What KAYAK brings to the table.</b></h2>
          <div className="boxes-container">
            <div className="box">
              <img src={logoImage1} alt="Logo" className="box-logo" />
              <div>
                <p className="box-title">Search for the best flight deals</p>
                <p>Search for the best flight deals from 900+ travel sites. No need to search multiple websites, KAYAK allows you to compare all of them in one place.</p>
              </div>
            </div>
            <div className="box">
              <img src={logoImage2} alt="Logo" className="box-logo" />
              <div>
                <p className="box-title">Book with flexibility</p>
                <p>Easily find and filter flights that suit your different requirements, like no cancellation fees.</p>
              </div>
            </div>
            <div className="box">
              <img src={logoImage3} alt="Logo" className="box-logo" />
              <div>
                <p className="box-title">Trusted and free</p>
                <p>We are completely free to use - no hidden charges or fees.</p>
              </div>
            </div>
            <div className="box">
              <img src={logoImage4} alt="Logo" className="box-logo" />
              <div>
                <p className="box-title">Easy to use trip planning tools</p>
                <p>With useful tools like trip planner, flight tracker and bag measure, KAYAK is more than just a flight search site - it is your complete travel partner.</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
