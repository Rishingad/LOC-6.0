import React from 'react';
import rocket from "../../assets/newRocket.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Glimpse.css"
import G1 from "../../assets/G1.jpg"
import G2 from "../../assets/G2.jpg"
import G3 from "../../assets/G3.jpg"
import G4 from "../../assets/G4.jpg"
import G5 from "../../assets/G5.jpg"
import G6 from "../../assets/G6.jpg"

const Glimpse = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 17000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg_gradient1"></div>
      <div className="bg_gradient2"></div>
      <h1 className='glimpse_head'>Glimpse of LOC 5.0</h1>
      <Slider {...settings}>
        <div>
          <h2></h2>
        </div>
        <div className='myDiv imgDiv'>
          <img style={{ height: "50vh" }} src={rocket} alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G1} className='main_img' alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G2} className='main_img' alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G3} className='main_img' alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G4} className='main_img' alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G5} className='main_img' alt="" />
        </div>
        <div className='myDiv'>
          <img style={{ height: "50vh" }} src={G6} className='main_img' alt="" />
        </div>
      </Slider>
    </>
  );
};

export default Glimpse;
