import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import './Carousel.css';
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
    "id": 1,
    "image": Image1,
    "place": "Dubai",
    "price": "from ₹ 28, 488",
    "link": "https://www.kayak.co.in/explore/DEL-DXB/20240617,20240620?stops=0"
  },
  {
    "id": 2,
    "image": Image2,
    "place": "Mumbai, MH",
    "price": "from ₹ 9, 667",
    "link": "https://www.kayak.co.in/explore/DEL-BOM/20240610,20240615?stops=0"
  },
  {
    "id": 3,
    "image": Image3,
    "place": "Hyderbad, TG",
    "price": "from ₹ 9, 634",
    "link": "https://www.kayak.co.in/explore/DEL-HYD/20240623,20240630?stops=0"
  },
  {
    "id": 4,
    "image": Image4,
    "place": "Benaluru",
    "price": "from ₹ 13, 538",
    "link": "https://www.kayak.co.in/explore/DEL-BLR/20240607,20240610?stops=0"
  },
  {
    "id": 5,
    "image": Image5,
    "place": "Kathmandu",
    "price": "from ₹ 13,621",
    "link": "https://www.kayak.co.in/explore/DEL-KTM/20240609,20240616?stops=0"
  },
  {
    "id": 6,
    "image": Image6,
    "place": "Chennai",
    "price": "from ₹ 12, 209",
    "link": "https://www.kayak.co.in/explore/DEL-MAA/20240610,20240617?stops=0"
  },
  {
    "id": 7,
    "image": Image7,
    "place": "Ahmedabad",
    "price": "from ₹ 8, 139",
    "link": "https://www.kayak.co.in/explore/DEL-AMD/20240615,20240619?stops=0"
  },
  {
    "id": 8,
    "image": Image8,
    "place": "Amristar",
    "price": "from ₹ 6,811",
    "link": "https://www.kayak.co.in/explore/DEL-ATQ/20240606,20240610?stops=0"
  }
];


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
