// // import React from 'react'
// // // import { motion, useTransform, useScroll } from "framer-motion";
// // import { motion } from "framer-motion";
// // import { useRef, useEffect, useState } from "react";
// // // import { Player, ControlBar, VolumeMenuButton } from 'video-react'
// // // import { useDragControls } from "framer-motion";
// // import CarouselCard from "./Carousel_Card"

// // const Carousel = () => {
// //     const cards = [
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "2nd rank ERC Remote 2023",
// //             id: 1,
// //         },
// //         {
// //             url: require("../../assets/images/logo-whitw.png"),
// //             title: "10th rank ERC Onsite 2023",
// //             id: 2,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "8th rank IRC'2023",
// //             id: 3,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "3rd rank IRDC 2022",
// //             id: 4,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "1st rank ERC Remote 2022",
// //             id: 5,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "1st rank ERC Remote 2021",
// //             id: 6,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "2nd rank IPASC 2021",
// //             id: 7,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "8th International Mars hackathon 2020",
// //             id: 8,
// //         },
// //         {
// //             url: require("../../assets/images/img1.png"),
// //             title: "9th International Mars hackathon 2020",
// //             id: 9,
// //         },
// //     ];
// //     const carousel = useRef();
// //     const [width, setwidth] = useState(5)

// //     useEffect(() => {
// //         const current = carousel.current;
// //         if (current) {
// //             const calculatedWidth = current.scrollWidth + current.offsetWidth;
// //             setwidth(calculatedWidth);
// //         }
// //     }, []);

// //     return (
// //         <div id="achievements" className="mt-[4rem] mb-[8rem]">
// //             <div className=" justify-center text-center text-3xl text-white font-meth component_title mb-[-5rem]">
// //                 Achievements
// //             </div>
// //             <section ref={carousel} className="relative h-[80vh]">
// //                 <div className="sticky top-0 flex items-center h-screen overflow-hidden">
// //                     <motion.div
// //                         className="flex gap-4 inner-corousel"
// //                         drag='x'
// //                         dragConstraints={{ right: 0, left: -width }}
// //                         whileTap={{ cursor: "grabbing" }}
// //                         style={{ display: "flex", flexDirection: "row", width: "fit-content" }}
// //                     >
// //                         {cards.map((card) => {
// //                             return <CarouselCard card={card} key={card.id} />;
// //                         })}
// //                     </motion.div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };


// // export default Carousel 


// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import CarouselCard from "./Carousel_Card";
// import "./Carousel.css"; // Import your CSS file for styling

// const Carousel = () => {
//     const cards = [
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "2nd rank ERC Remote 2023",
//             id: 1,
//         },
//         {
//             url: require("../../assets/images/logo-whitw.png"),
//             title: "10th rank ERC Onsite 2023",
//             id: 2,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "8th rank IRC'2023",
//             id: 3,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "3rd rank IRDC 2022",
//             id: 4,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "1st rank ERC Remote 2022",
//             id: 5,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "1st rank ERC Remote 2021",
//             id: 6,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "2nd rank IPASC 2021",
//             id: 7,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "8th International Mars hackathon 2020",
//             id: 8,
//         },
//         {
//             url: require("../../assets/images/img1.png"),
//             title: "9th International Mars hackathon 2020",
//             id: 9,
//         },
//     ];
//     const carousel = useRef();
//     const [width, setWidth] = useState(0);

//     useEffect(() => {
//         const updateWidth = () => {
//             if (carousel.current) {
//                 setWidth(carousel.current.offsetWidth);
//             }
//         };

//         updateWidth();

//         window.addEventListener("resize", updateWidth);

//         return () => {
//             window.removeEventListener("resize", updateWidth);
//         };
//     }, []);

//     return (
//         <div id="achievements" className="mt-4 mb-8">
//             <div className="justify-center text-center text-3xl text-white font-meth component_title mb-[-5rem]">
//                 Achievements
//             </div>
//             <section ref={carousel} className="relative h-[80vh] carousel-container">
//                 <div className="sticky top-0 overflow-hidden">
//                     <motion.div
//                         className="flex gap-4 inner-carousel"
//                         drag="x"
//                         dragConstraints={{ right: 0, left: -width }}
//                         whileTap={{ cursor: "grabbing" }}
//                         style={{ display: "flex", flexDirection: "row", width: "fit-content" }}
//                     >
//                         {cards.map((card) => (
//                             <CarouselCard card={card} key={card.id} />
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Carousel;


// import Faq from "./Components/FAQ/Faq"
// import Contact from "./Components/Contact/Contact"
// import Sponsor from "./Components/Sponsor/Sponsor"
// import Prizes from "./Components/Prizes/Prizes"
// import Domain from "./Components/Domain/Domain"

// const App = () => {
//   const cards = [
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'WEB DEV' },
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'APP DEV' },
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'AIML' },
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'BLOCKCHAIN' },
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'IOT' },
//     { img: 'https://toppng.com/uploads/preview/the-best-desktop-and-mobile-device-web-application-web-development-roadmap-for-beginners-11562994107vff2jubs7n.png', title: 'OPEN INNOVATION' }
//   ]
//   return (
//     <div>
//       {/* <Domain cards = {cards} />
//       <Prizes />
//       <Sponsor />
//       <Faq />
//       <Contact /> */}

//     </div>
//   )
// }

// export default App



// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useRef, useState } from "react";
// import "./Carousel.css"


// function Carousel() {

//   const [slidesToShow, setSlidesToShow] = useState(3);

//   const updateSlidesToShow = () => {
//     if (window.innerWidth < 850) {
//       setSlidesToShow(2);
//     }
//     else if (window.innerWidth < 600 && window.innerWidth > 850) {
//       setSlidesToShow(1);
//     }
//     else {
//       setSlidesToShow(3);
//     }
//   };

//   useEffect(() => {
//     updateSlidesToShow();

//     window.addEventListener('resize', updateSlidesToShow);

//     return () => {
//       window.removeEventListener('resize', updateSlidesToShow);
//     };
//   }, []);


//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (sliderRef.current) {
//         sliderRef.current.slickNext();
//       }
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1
//   };
//   return (
//     <div className='main_carousel'>
//       <div className="inner_carousel">
//         <Slider ref={sliderRef} {...settings}>
//           {data.map((d) => (
//             <div key={d.name} className="carousel_section">
//               <div className='flex justify-center items-center rounded-t-xl'>
//                 <img src={d.img} alt="" className="img_carousel" />
//               </div>

//               <div className="section2 flex flex-col items-center justify-center gap-4 p-4">
//                 <p className="carousel_head text-xl font-semibold">{d.name}</p>
//                 <p className="carousel_text text-center text-xl">{d.review}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//     </div>
//   );
// }

// const data = [
//   {
//     name: `John Morgan`,
//     img: require('../../assets/images/img1.png'),
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Ellie Anderson`,
//     img: require('../../assets/images/img1.png'),
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Nia Adebayo`,
//     img: require('../../assets/images/img1.png'),
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Rigo Louie`,
//     img: require('../../assets/images/img1.png'),
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: require('../../assets/images/img1.png'),
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },

// ];

// export default Carousel;


import React from 'react'
import Carousel , { consts } from "react-elastic-carousel";
import "./Carousel.css"
import { FaArrowCircleRight , FaArrowCircleLeft } from "react-icons/fa";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 2 },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <FaArrowCircleRight className='custom_icon' />  : <FaArrowCircleLeft className='custom_icon' />
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
    { id: 1, content: 'Tech-Event 8', img: require('../../assets/images/img1.png') },
    { id: 2, content: 'Tech-Event 7', img: require('../../assets/images/img1.png') },
    { id: 3, content: 'Tech-Event 6', img: require('../../assets/images/img1.png') },
    { id: 4, content: 'Tech-Event 5', img: require('../../assets/images/img1.png') },
    { id: 5, content: 'Tech-Event 4', img: require('../../assets/images/img1.png') },
    { id: 6, content: 'Tech-Event 3', img: require('../../assets/images/img1.png') },
    { id: 7, content: 'Tech-Event 2', img: require('../../assets/images/img1.png') },
    { id: 8, content: 'Tech-Event 1', img: require('../../assets/images/img1.png') },
  ]
  return (
    <>
      <h1 className='carousel_head'>Glimpse of LOC 5.0</h1>
      <div className="carousel_elastic">
        <Carousel renderArrow = {myArrow} {...settings} breakPoints={breakPoints}>
          {items.map((item) => (
            <div className='item_set' key={item.id}>
              <img className='item_img' src={item.img} alt="" />
              <h2 className='item_head'>{item.content}</h2>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default CarouselMain
