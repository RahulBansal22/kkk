import React, { useState } from "react";
import carouselData from "../carouselData.json";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedItems, setSavedItems] = useState([]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < carouselData.length - 4 ? prevIndex + 1 : prevIndex));
  };

  const handleSave = (id) => {
    setSavedItems((prevItems) => (prevItems.includes(id) ? prevItems : [...prevItems, id]));
  };

  return (
    <div className="carousel-container mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className='mapheading'>
          <span className="bold-line">Hop on, hop off </span><br />
          Skip the layovers and fly nonstop to these destinations
        </h2>
        <button className="see-more-button">
          <b>See more</b>
        </button>
      </div>
      <div className="relative flex items-center">
        <button onClick={handlePrev} className="absolute left-0 z-10">
          <FaChevronLeft />
        </button>
        <div className="carousel flex overflow-hidden w-full">
          {carouselData.slice(currentIndex, currentIndex + 4).map((item) => (
            <div key={item.id} className="carousel-item flex-shrink-0 w-1/4 p-2">
              <div className="carousel-card bg-white p-4 rounded-lg shadow-md relative">
                <img src={item.image} alt={item.place} className="carousel-image w-full object-cover rounded-lg" />
                <button onClick={() => handleSave(item.id)} className="save-button absolute top-2 right-2 bg-white border border-black rounded-full p-1 flex items-center">
                  <FaHeart className={savedItems.includes(item.id) ? "text-black" : "text-gray-500"} />
                  {savedItems.includes(item.id) && <span className="ml-2 text-black">saved</span>}
                </button>
                <button onClick={() => window.location.href = item.link} className="direct-button">
                  Direct
                </button>
                <div className="carousel-text">
                  <h3>{item.place}</h3>
                  <h3>{item.price}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 z-10">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
