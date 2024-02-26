import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "/sponsor/bg_sponsor.png";
// import sponsors from "/sponsor/sponsors.png";
import devfolio from "/sponsor/devfolio.png";
import eth from "/sponsor/eth.png";
import polygon from "/sponsor/polygon.png";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <section className=" bg-[#040B11] w-full  md:h-auto relative overflow-hidden ">
        <div className=" relative w-full flex justify-center items-center">
          <p
            data-aos="fade-right"
            className="absolute font-bakbak w-full top-[1rem] text-center font-semibold text-[3rem] md:text-[5rem] text-white z-20"
          >
            Sponsors
          </p>
          <img
            src={devfolio}
            data-aos="fade-down"
            className=" absolute w-[50%] sm:w-[25%] top-[30%] sm:top-[40%]    z-20"
            alt="sponsors2"
          />
          <img
            src={eth}
            data-aos="fade-right"
            className=" absolute w-[50%] sm:w-[25%] bottom-[32%]  sm:left-[10%] sm:bottom-[10%]  z-20"
            alt="sponsors1"
          />
          <img
            src={polygon}
            data-aos="fade-left"
            className=" absolute w-[50%] sm:w-[25%] z-20 sm:right-[10%] bottom-[10%]"
            alt="sponsors3"
          />
          <img
            src={bg}
            className=" w-full h-[60vh] lg:h-[100vh] z-10"
            alt="bg"
          />
          {/* <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto right-[5%] bottom-[5%] md:right-[5%] md:bottom-[5%] lg:right-[5%] lg:bottom-[5%] z-20"
            alt="sponsors3"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Sponsors;
Sponsors;
