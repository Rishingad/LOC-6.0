"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../../../public/img1.JPG";
import image2 from "../../../public/img2.JPG";
import image3 from "../../../public/img3.JPG";
import image4 from "../../../public/img4.JPG";
import image5 from "../../../public/img5.JPG";
import image6 from "../../../public/img6.JPG";
import Image from 'next/image';
import './Carousel.css'; 

const CarouselComponent = () => {
  return (
    <div className='swiper-main'>

    
    <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showArrows={true}
      showThumbs={false}
      className='swiper-container'
    >
      <div id='gallery' className='swiper-slide '>
        <Image src={image1} alt="Slide 1" />
      </div>
      <div className='swiper-slide '>
        <Image src={image2} alt="Slide 2" />
      </div>
      <div className='swiper-slide '>
        <Image src={image3} alt="Slide 3" />
      </div>
      <div className='swiper-slide '>
        <Image src={image4} alt="Slide 4" />
      </div>
      <div className='swiper-slide '>
        <Image src={image5} alt="Slide 5" />
      </div>
      <div className='swiper-slide '>
        <Image src={image6} alt="Slide 6" />
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
