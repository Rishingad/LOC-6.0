import React from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import "./Glimpse.css"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


import img1 from "../../assets/G1.jpg";
import img2 from "../../assets/G2.jpg";
import img3 from "../../assets/G3.jpg";
import img4 from "../../assets/G4.jpg";
import img5 from "../../assets/G5.jpg";
import img6 from "../../assets/G6.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 2 },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <FaArrowCircleRight className='custom_icon' /> : <FaArrowCircleLeft className='custom_icon' />
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}

const CarouselMain = () => {
  const settings = {
    pagination: true,
    isRTL: true,
  };

  const items = [
    { id: 6, img: img6 },
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
  ]
  return (
    <>
      <div className="carousel_main">
        <h1 className='carousel_head'>Glimpse of LOC 5.0</h1>
        <div className="carousel_elastic">
          <Carousel renderArrow={myArrow} {...settings} breakPoints={breakPoints}>
            {items.map((item) => (
              <div className='item_set' key={item.id}>
                <img className='item_img' src={item.img} alt="" />
                {/* <h2 className='item_head'>{item.content}</h2> */}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default CarouselMain
