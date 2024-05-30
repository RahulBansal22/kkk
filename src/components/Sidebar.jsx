import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { FaCarAlt, FaUmbrellaBeach, FaRupeeSign, FaHeart } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { TbSquareLetterKFilled } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { IoBagSharp, IoMenu } from "react-icons/io5";
import { BiSolidMessageAltEdit } from "react-icons/bi";

const section1 = [
  { id: 1, title: "Flights", state: true },
  { id: 2, title: "Stays", state: false },
  { id: 3, title: "Car Rental", state: false },
  { id: 4, title: "Hotel", state: false },
];

const section2 = [
  { id: 1, title: "Explore", state: false },
  { id: 2, title: "Direct", state: false },
  { id: 3, title: "Time", state: false },
  { id: 4, title: "Business", state: false },
];

const section3 = [
  { id: 1, title: "Trips", state: false },
];

const section4 = [
  { id: 1, title: "English", state: false },
  { id: 2, title: "Indian", state: false },
  { id: 3, title: "Feedback", state: false },
];

const titleIcon1 = {
  Flights: MdFlight,
  Stays: IoBed,
  "Car Rental": FaCarAlt,
  Hotel: FaUmbrellaBeach,
};

const titleIcon2 = {
  Explore: CiGlobe,
  Direct: TbSquareLetterKFilled,
  Time: IoIosTime,
  Business: IoBagSharp,
};

const titleIcon3 = {
  Trips: FaHeart,
};

const titleIcon4 = {
  English: CiGlobe,
  Indian: FaRupeeSign,
  Feedback: BiSolidMessageAltEdit,
};

const Sidebar = ({ onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    onToggle(!isExpanded);
  };

  return (
    <aside
      className={`border-r-[1px] border-[#D9E2E7] ${
        isExpanded ? "w-[232px]" : "w-16"
      } transition-width duration-300 h-screen`}
    >
      <button
        onClick={toggleSidebar}
        className="text-black w-full p-2 item-center justify-center flex"
      >
        <IoMenu size={24} />
      </button>
      <div>
        {section1.map((details) => {
          const IconComponent = titleIcon1[details.title];
          return (
            <div
              className={`flex h-14 w-full px-5 py-5 space-x-5 text-sm rounded-md ${
                details.state
                  ? "bg-gray-200 font-bold"
                  : "bg-transparent font-normal"
              }`}
              key={details.id}
            >
              <span className="py-1">
                <IconComponent
                  size={18}
                  className={`${
                    details.state ? "text-black" : "text-[#8796A1]"
                  }`}
                />
              </span>
              {isExpanded && <span className="">{details.title}</span>}
            </div>
          );
        })}
      </div>
      <div className="w-full border-t border-gray-300 px-2"></div>
      <div>
        {section2.map((details) => {
          const IconComponent = titleIcon2[details.title];
          return (
            <div
              className={`flex h-14 w-full px-5 py-5 space-x-5 text-sm rounded-md ${
                details.state
                  ? "bg-gray-200 font-bold"
                  : "bg-transparent font-normal"
              }`}
              key={details.id}
            >
              <span className="py-1">
                <IconComponent
                  size={18}
                  className={`${
                    details.state ? "text-black" : "text-[#8796A1]"
                  }`}
                />
              </span>
              {isExpanded && <span className="">{details.title}</span>}
            </div>
          );
        })}
        <div className="w-full border-t border-gray-300 px-2"></div>
        {section3.map((details) => {
          const IconComponent = titleIcon3[details.title];
          return (
            <div
              className={`flex h-14 w-full px-5 py-5 space-x-5 text-sm rounded-md ${
                details.state
                  ? "bg-gray-200 font-bold"
                  : "bg-transparent font-normal"
              }`}
              key={details.id}
            >
              <span className="py-1">
                <IconComponent
                  size={18}
                  className={`${
                    details.state ? "text-black" : "text-[#8796A1]"
                  }`}
                />
              </span>
              {isExpanded && <span className="">{details.title}</span>}
            </div>
          );
        })}
        <div className="w-full border-t border-gray-300 px-2"></div>
        {section4.map((details) => {
          const IconComponent = titleIcon4[details.title];
          return (
            <div
              className={`flex h-14 w-full px-5 py-5 space-x-5 text-sm rounded-md ${
                details.state
                  ? "bg-gray-200 font-bold"
                  : "bg-transparent font-normal"
              }`}
              key={details.id}
            >
              <span className="py-1">
                <IconComponent
                  size={18}
                  className={`${
                    details.state ? "text-black" : "text-[#8796A1]"
                  }`}
                />
              </span>
              {isExpanded && <span className="">{details.title}</span>}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
