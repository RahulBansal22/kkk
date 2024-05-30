import React, { useState, useEffect } from "react";
import carouselData from "../Caro.json";
import { FaChevronRight, FaChevronLeft, FaHeart } from "react-icons/fa";
import './Caro.css';

const Caro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedItems, setSavedItems] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? carouselData.length - 1 : carouselData.length - 2;
      return prevIndex < maxIndex ? prevIndex + 1 : prevIndex;
    });
  };

  const handleSave = (id) => {
    setSavedItems((prevItems) => (prevItems.includes(id) ? prevItems : [...prevItems, id]));
  };

  return (
    <div className="caro-container mt-8">
     <div className="flex justify-between items-center mb-4">
        <h2 className='mapheading'>
          <span className="bold-line">Hop on, hop off </span><br />
          Skip the layovers and fly nonstop to these destinations
        </h2>    
             </div>
        <button onClick={handlePrev} className="caro-nav-button left-0">
          <FaChevronLeft />
        </button>
        <div className="caro-carousel flex overflow-hidden w-full">
          {carouselData.slice(currentIndex, currentIndex + (isMobile ? 1 : 2)).map((item) => (
            <div key={item.id} className="caro-item flex-shrink-0 p-2">
              <div className="caro-card bg-white p-4 rounded-lg shadow-md relative">
                <img src={item.image} alt={item.place} className="caro-image w-full object-cover rounded-lg" />
                <button 
                  onClick={() => handleSave(item.id)} 
                  className={`caro-save-button absolute top-2 right-2 bg-white border-2 border-black ${savedItems.includes(item.id) ? "saved" : ""}`}
                >
                  <FaHeart className={`caro-heart ${savedItems.includes(item.id) ? "text-black" : "text-white"}`} />
                </button>
                {savedItems.includes(item.id) && <span className="saved-text">Saved</span>}
                <div className="caro-text">
                  <h3>{item.place}</h3>
                  <h3>{item.price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="caro-nav-button right-0">
          <FaChevronRight />
        </button>
      </div>
    
  );
};

export default Caro;
