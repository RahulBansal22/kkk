  import React from 'react';
  import './Footer.css';
  import fbLogo from '../assets/fb.svg';
  import twitterLogo from '../assets/x.svg';
  import ytLogo from '../assets/yt.svg';
  import instaLogo from '../assets/insta.svg';
  import Logo from '../assets/final.png';
  import logo1 from '../assets/appstore.svg';
  import logo2 from '../assets/playstore.svg';
  import { FaRegCopyright } from "react-icons/fa";

  const Footer = () => {
    return (
      <div className="footer-container">
        <div className="footer-section">
          <p>Search flights, hotels, hire cars, travel guides and more with KAYAK.
          KAYAK searches hundreds of other travel sites at once to get you the information you need to make the right decisions.</p>
          <hr className="thin-line" />
          <div className="table-like-structure">
            <div className="column">
              <ul>
                <li><b>Company</b></li>
                <li>About</li>
                <li>Carrers</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>How we work</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li><b>Contact</b></li>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affiliates</li>
                <li>Hotel owners</li>
                <li>Partners</li>
                <li>Advertise with us</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li><b>More</b></li>
                <li>Airline fees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li><b>KAYAK app</b></li>
                <li><img src={logo1} alt="Logo 1" /></li>
                <li><img src={logo2} alt="Logo 2" /></li>
              </ul>
            </div>
          </div>
          <hr className="thin-line" />
          <div className="footer-logos">
            <h2><FaRegCopyright />2024 KAYAK  Privacy  Terms & Conditions </h2>
            <a href="#"><img src={fbLogo} alt="Facebook Logo" /></a>
            <a href="#"><img src={twitterLogo} alt="Twitter Logo" /></a>
            <a href="#"><img src={ytLogo} alt="YouTube Logo" /></a>
            <a href="#"><img src={instaLogo} alt="Instagram Logo" /></a>
          </div>
          <div className="last">
            <a href="#"><img src={Logo} alt="Instagram Logo" /></a>
          </div>
        </div>
      </div>
    );
  };

  export default Footer;
