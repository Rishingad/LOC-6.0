import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "/sponsor/bg_sponsor.png";
import sponsors from "/sponsor/sponsors.png";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <section className=" bg-[#040B11] w-full relative overflow-hidden ">
        <div className=" relative w-full flex justify-center items-center">
          <p
            data-aos="fade-right"
            className="absolute font-bakbak w-full top-[1rem] text-center font-semibold text-[1.3rem] md:text-[5rem] text-white z-20"
          >
            Sponsors
          </p>
          <img src={bg} className=" w-full lg:h-[100vh] z-10" alt="bg" />
          <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto left-[5%] bottom-[5%] md:left-[5%] md:bottom-[5%] lg:left-[5%] lg:bottom-[5%] z-20"
            alt="sponsors1"
          />
          <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto left-[22%] top-[35%] md:left-[25%] md:top-[35%] lg:left-[25%] lg:top-[35%] z-20"
            alt="sponsors2"
          />
          <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto  top-[15%] md:left-[43%] md:top-[15%] lg:left-[43%] lg:top-[15%] z-20"
            alt="sponsors3"
          />
          <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto right-[22%] top-[35%] md:right-[25%] md:top-[35%] lg:right-[25%] lg:top-[35%] z-20"
            alt="sponsors3"
          />
          <img
            src={sponsors}
            data-aos="fade-up"
            className=" absolute w-[3rem] sm:w-[8rem] md:w-[10rem] lg:w-auto right-[5%] bottom-[5%] md:right-[5%] md:bottom-[5%] lg:right-[5%] lg:bottom-[5%] z-20"
            alt="sponsors3"
          />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
Sponsors;
