import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div className="circle top-left"></div>

        <div className="about-us">
          <h1 data-aos="fade-right">About Us</h1>
          <p data-aos="fade-left">
            LOC isn't your average hackathon; it's a <span>24-hour</span> coding
            extravaganza that sets the standard for innovation and fun. Hosted
            by <span>DJSCE's ACM student chapter</span>, LOC celebrates the
            spirit of coding and creativity. Last year, we offered a prize pool
            of <span>1.2 lakh</span> INR. Join us for the next session and
            experience the thrill of turning your wildest ideas into reality.
            Whether you're a seasoned coder or just starting out, LOC is your
            stage to shine. Get ready to code, collaborate, and create because
            innovation comes to life at LOC!
          </p>
        </div>
        <div className="circle right"></div>
      </div>
    </div>
  );
}

export default About;
