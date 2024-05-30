import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Map from './components/Map';
import MailSection from './components/Mailsection.jsx';
import Carousel from "./components/Carousel";
import Tool from './components/Tool.jsx';
import Hero from './components/Hero';
import Caro from './components/Caro.jsx';
import Footer from './components/Footer.jsx';
import Comp from './components/Comp.jsx';
import Ques from './components/Ques.jsx';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleSidebarToggle = (isExpanded) => {
    setIsSidebarExpanded(isExpanded);
  };

  return (
    <>
      <Header onToggle={handleSidebarToggle} />
      <div className='app-content'>
        <Hero isSidebarExpanded={isSidebarExpanded} />
        <Map />
        <MailSection />
        <Carousel />
        <Tool />
        <Caro />
         <Comp/> 
         <Ques/>
      </div>
      <Footer />
    </> 
  );
}

export default App;
