import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "/sponsor/bg_sponsor.png";
// import sponsors from "/sponsor/sponsors.png";
import devfolio from "/sponsor/devfolio.png";
import eth from "/sponsor/eth.png";
import polygon from "/sponsor/polygon.png";
import dubai from "../../assets/dubai.png"
import educat from "../../assets/educat.jpg"
import Nutorio from "../../assets/Nutorio.jpg"
import './Sponsors.css'

const Sponsors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const getBottomSpacing = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1100) {
      return "4%";
    }
    else if (screenWidth < 1100) {
      return "1%";
    }
  };

  return (
    <>
      <section className=" bg-[#040B11] w-full  md:h-auto relative overflow-hidden ">
        <div className="custom_img_container relative w-full flex justify-center items-center">
          <p
            data-aos="fade-right"
            className="absolute font-bakbak w-full top-[1rem] text-center font-semibold text-[3rem] md:text-[5rem] text-white z-20"
          >
            Sponsors
          </p>
          <img
            src={devfolio}
            data-aos="fade-down"
            className="img_class devfolio absolute w-[50%] sm:w-[25%] sm:top-[30%] z-20"
            alt="sponsors2"
          />
          <img
            src={eth}
            data-aos="fade-right"
            className="img_class eth absolute w-[50%] sm:w-[25%] sm:left-[10%] sm:top-[30%] z-20"
            alt="sponsors1"
          />
          <img
            src={dubai}
            data-aos="fade-right"
            className="img_class dubai absolute w-[50%] sm:w-[25%] sm:bottom-[10%]  z-20"
            alt="sponsors1"
          />
          <div style={{ bottom: getBottomSpacing() }} className="partner_text font-bakbak absolute w-[50%] sm:w-[25%] sm:bottom-[4%] z-20">
            Energizing partner
          </div>
          <img
            src={Nutorio}
            data-aos="fade-right"
            // className=" absolute w-[50%] sm:w-[25%] bottom-[32%] sm:left-[10%] sm:bottom-[10%]  z-20"
            className="img_class nutorio absolute w-[50%] sm:w-[25%] sm:left-[10%] sm:bottom-[10%] z-20"
            alt="sponsors1"
          />
          <div style={{ bottom: getBottomSpacing() }} className="partner_text font-bakbak absolute w-[50%] sm:w-[25%] sm:bottom-[4%] sm:left-[10%] z-20">
            Healthy snacking partner
          </div>
          <img
            src={educat}
            data-aos="fade-right"
            // className=" absolute w-[50%] sm:w-[25%] bottom-[32%]  sm:left-[10%] sm:bottom-[10%]  z-20"
            className="img_class educat absolute w-[50%] sm:w-[25%] z-20 sm:right-[10%] sm:bottom-[10%]"
            alt="sponsors1"
          />
          <div style={{ bottom: getBottomSpacing() }} className="partner_text font-bakbak absolute w-[50%] sm:w-[25%] sm:bottom-[4%] sm:right-[10%]  z-20">
            Education partner
          </div>
          <img
            src={polygon}
            data-aos="fade-left"
            className="img_class polygon absolute w-[50%] sm:w-[25%] z-20 sm:right-[10%] sm:top-[30%]"
            alt="sponsors3"
          />
          <img
            src={bg}
            className=" w-full h-[100vh] lg:h-[100vh] z-10"
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
