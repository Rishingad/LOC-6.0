import React, { useState, useEffect } from "react";
import "./Hero.css";
import About from "../About/About"
import Domain from "../Domain/Domain"
import Partner from "../Partner/partner"
import Sponsor from "../Sponsor/Sponsor";
import FAQ from "../FAQ/Faq";
import Contact from "../Contact/Contact";
import Prizes from "../Prizes/Prizes"
import Competitions from "../Carousel/Competition";
import { FaArrowCircleUp } from "react-icons/fa";

const Hero = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [ visible, setVisible ] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setVisible(true);
    } 
    else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="home-section">
        <div className="main-wrapper">
          <div className="title">lines of code</div>
          <div className="coming-soon-wrapper">2023-2024 COMING SOON!</div>
        </div>
      </div>
      <About></About>
      <Domain></Domain>
      <Prizes></Prizes>
      <Partner></Partner>
      <Sponsor></Sponsor>
      <Competitions />
      <FAQ></FAQ>
      <Contact></Contact>
      {
        visible && (<div className="top">
          <button onClick={scrollTop} className="btn_top">
            {<FaArrowCircleUp className="custom_icon2" />}
          </button>
        </div>)
      }
    </>
  );
};

export default Hero;
