// import React from 'react'
// // import { motion, useTransform, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// // import { Player, ControlBar, VolumeMenuButton } from 'video-react'
// // import { useDragControls } from "framer-motion";
// import CarouselCard from "./Carousel_Card"

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
//     const [width, setwidth] = useState(5)

//     useEffect(() => {
//         const current = carousel.current;
//         if (current) {
//             const calculatedWidth = current.scrollWidth + current.offsetWidth;
//             setwidth(calculatedWidth);
//         }
//     }, []);

//     return (
//         <div id="achievements" className="mt-[4rem] mb-[8rem]">
//             <div className=" justify-center text-center text-3xl text-white font-meth component_title mb-[-5rem]">
//                 Achievements
//             </div>
//             <section ref={carousel} className="relative h-[80vh]">
//                 <div className="sticky top-0 flex items-center h-screen overflow-hidden">
//                     <motion.div
//                         className="flex gap-4 inner-corousel"
//                         drag='x'
//                         dragConstraints={{ right: 0, left: -width }}
//                         whileTap={{ cursor: "grabbing" }}
//                         style={{ display: "flex", flexDirection: "row", width: "fit-content" }}
//                     >
//                         {cards.map((card) => {
//                             return <CarouselCard card={card} key={card.id} />;
//                         })}
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// };


// export default Carousel 


import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import CarouselCard from "./Carousel_Card";
import "./Carousel.css"; // Import your CSS file for styling

const Carousel = () => {
    const cards = [
        {
            url: require("../../assets/images/img1.png"),
            title: "2nd rank ERC Remote 2023",
            id: 1,
        },
        {
            url: require("../../assets/images/logo-whitw.png"),
            title: "10th rank ERC Onsite 2023",
            id: 2,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "8th rank IRC'2023",
            id: 3,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "3rd rank IRDC 2022",
            id: 4,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "1st rank ERC Remote 2022",
            id: 5,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "1st rank ERC Remote 2021",
            id: 6,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "2nd rank IPASC 2021",
            id: 7,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "8th International Mars hackathon 2020",
            id: 8,
        },
        {
            url: require("../../assets/images/img1.png"),
            title: "9th International Mars hackathon 2020",
            id: 9,
        },
    ];
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.offsetWidth);
            }
        };

        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    return (
        <div id="achievements" className="mt-4 mb-8">
            <div className="justify-center text-center text-3xl text-white font-meth component_title mb-[-5rem]">
                Achievements
            </div>
            <section ref={carousel} className="relative h-[80vh] carousel-container">
                <div className="sticky top-0 overflow-hidden">
                    <motion.div
                        className="flex gap-4 inner-carousel"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        whileTap={{ cursor: "grabbing" }}
                        style={{ display: "flex", flexDirection: "row", width: "fit-content" }}
                    >
                        {cards.map((card) => (
                            <CarouselCard card={card} key={card.id} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Carousel;
