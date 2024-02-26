import React, { useEffect, useRef } from "react";
import "./prizes.css";
import Aos from "aos";

function Prizes() {
  const prizesRef = useRef(null);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // The .prizes section is now visible
            // Trigger your animation here

            // For example, you can add a class to start the animation
            prizesRef.current.classList.add("animation-started");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Start observing the .prizes section
    if (prizesRef.current) {
      observer.observe(prizesRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (prizesRef.current) {
        observer.unobserve(prizesRef.current);
      }
    };
  }, []);

  return (
    <div ref={prizesRef} className="prizes" id="prizes">
      <div data-aos="fade-right" className="title">
        PRIZES
      </div>
      <div className="prize-1">
        <div className="additional-animation"></div>
        <div className="prize-money">₹50,000</div>
      </div>
      <div className="prize-2">
        <div className="additional-animation"></div>
        <div className="prize-money">₹75,000</div>
      </div>
      <div className="prize-3">
        <div className="additional-animation"></div>
        <div className="prize-money">₹40,000</div>
      </div>
    </div>
  );
}

export default Prizes;
