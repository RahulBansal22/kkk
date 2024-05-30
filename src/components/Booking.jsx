/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Book = () => {
  const [bookingData, setBookingData] = useState({});
  const [reverseDirection, setReverseDirection] = useState(false);

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleReverse = () => {
    setReverseDirection(!reverseDirection);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (Object.keys(bookingData).length === 5) {
      alert("Booking submitted!");
    } else {
      alert("Please select data properly");
    }
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <form className="flex flex-col gap-y-1">

        <div className="flex flex-col md:flex-row gap-x-1 items-center mb-2">
          <div className="dropdown-container flex flex-10">
            <select className="dropdown-button" name="tripType" required onChange={(e) => handleChange(e)}>
              <option value="" hidden>
                Return
              </option>
              <option>One-way</option>
              <option>Return</option>
              <option>Multi-city</option>
            </select>
          </div>

          <div className="dropdown-container flex flex-10">
            <select className="dropdown-button" name="travellers" required onChange={(e) => handleChange(e)}>
              <option value="" hidden>
                Traveller
              </option>
              <option>Adults 18+</option>
              <option>Students over 18</option>
              <option>Youths 12-17</option>
              <option>Children 2-11</option>
              <option>Toddlers in own seat under 2</option>
              <option>Infants on lap under 2</option>
            </select>
          </div>

          <div className="dropdown-container flex flex-10">
            <select className="dropdown-button" name="classType" required onChange={(e) => handleChange(e)}>
              <option value="" hidden>
                Economy
              </option>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First</option>
              <option>Mixed</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-1 items-center">
          <div className="py-1.5 px-2.5 flex-1 flex-grow inner-box">
            <div className="flex flex-row items-center">
              <select
                className="outline-none px-2 py-2 w-full text-black bg-gray-300 h-10"
                name="from"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  From?
                </option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-1.25 flex-1/2 inner-box flex items-center justify-center">
            <div className="flex items-center justify-center bg-gray-300 p-1 h-10">
              <button
                onClick={handleReverse}
                className="flex items-center justify-center bg-transparent border-none p-1 h-10"
              >
                <FaArrowRightArrowLeft className={`text-xl transform ${reverseDirection ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          <div className="py-1.5 px-1.25 flex-1/2 inner-box flex items-center justify-center">
            <div className="flex flex-row items-center">
              <select
                className="outline-none px-2 py-2 w-full text-black bg-gray-300 h-10"
                name="to"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  To?
                </option>
                <option>New York</option>
                <option>London</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-1.25 flex-1 inner-box">
            <input
              type="date"
              className="outline-none px-2 py-2 w-full text-black bg-gray-300 h-10"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="py-1.5 px-1.25 flex-1 inner-box">
            <input
              type="date"
              className="outline-none px-2 py-2 w-full text-black bg-gray-300 h-10"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            onClick={(e) => handleBook(e)}
            className="inline-flex items-center bg-orange-500 text-white px-3 py-2 space-x-2 search-button h-10 border-radius-5 padding"
            type="submit"
          >
            <CiSearch className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
