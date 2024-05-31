import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaHeart } from "react-icons/fa";
import './Caro.css';
import Image1 from '../assets/i1.jpeg';
import Image2 from '../assets/i2.jpeg';
import Image3 from '../assets/i3.jpeg';
import Image4 from '../assets/i4.jpeg';
import Image5 from '../assets/i5.jpeg';
import Image6 from '../assets/i6.jpeg';
import Image7 from '../assets/i7.jpeg';
import Image8 from '../assets/i8.jpeg';


const carouselData = [
  {
    id: 1,
    image: Image5,
    place: "Kathmandu",
    price: "from ₹ 13,621",
    link: "https://www.kayak.co.in/explore/DEL-KTM/20240609,20240616?stops=0"
   
  },
  {
    id: 2,
    image: Image8,
    place: "Amristar",
    price: "from ₹ 6,811",
    link: "https://www.kayak.co.in/explore/DEL-ATQ/20240606,20240610?stops=0"
    
  },
  {
    id: 3,
    image: Image3,
    place: "Hyderbad, TG",
    price: "from ₹ 9, 634",
    link: "https://www.kayak.co.in/flights/DEL-BLR/2024-06-05/2024-06-12?sort=bestflight_a"
  },
  {
    id: 4,
    image: Image4,
    place: "Benaluru",
    price: "from ₹ 13, 538",
    link: "https://www.kayak.co.in/flights/DEL-BLR/2024-06-05/2024-06-12?sort=bestflight_a"
  },
  {
    id: 5,
    image: Image1,
    place: "Dubai",
    price: "from ₹ 28, 488",
    link: "https://www.kayak.co.in/flights/DEL-BOM/2024-06-05/2024-06-12"
  },
  {
    id: 6,
    image: Image6,
    place: "Chennai",
    price: "from ₹ 12, 209",
    link: "https://www.kayak.co.in/explore/DEL-MAA/20240610,20240617?stops=0"
  },
  {
    id: 7,
    image: Image7,
    place: "Ahmedabad",
    price: "from ₹ 8, 139",
    link: "https://www.kayak.co.in/explore/DEL-AMD/20240615,20240619?stops=0"
  },
  {
    id: 8,
    image: Image2,
    place: "Mumbai, MH",
    price: "from ₹ 9, 667",
    link: "https://www.kayak.co.in/flights/DEL-BLR/2024-06-05/2024-06-12?sort=bestflight_a"
     }
];

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
