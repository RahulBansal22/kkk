  import React from "react";

  const Hero = ({ isSidebarExpanded }) => {
    return (
      <div
        className={`flex-grow transition-margin duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
      
      </div>
    );
  };

  export default Hero;
