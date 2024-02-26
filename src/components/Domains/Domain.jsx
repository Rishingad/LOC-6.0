import Aos from "aos";
import "./Domain.css";
import { useState, useEffect } from "react";
const Domain = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Define the range of scroll coordinates where the class should be applied
      const startScroll = 2500; // Adjust as needed
      const endScroll = 3112; // Adjust as needed

      // Check if the scroll is within the specified range
      if (scrollY >= startScroll && scrollY <= endScroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <div className="domain-wrapper" id="domains">
        <div className="domain-heading">
          Domains
        </div>
        <div className="domain-content">
          <div className="domain-container">
            <div
              
              className={`domain-card ${isScrolled ? "flip-domain" : ""}`}
            >
              <div className="domain-front">
                {" "}
                <img src="../entering_area_51.png" alt="" />
              </div>
              <div className="domain-back">
                {" "}
                <img src="../Domains/webapp.png" alt="" />
                <p>Web/App</p>
              </div>
            </div>
          </div>

          <div className="domain-container">
            <div
              
              className={`domain-card ${isScrolled ? "flip-domain" : ""}`}
            >
              <div className="domain-front">
                {" "}
                <img src="../entering_area_51.png" alt="" />
              </div>
              <div className="domain-back">
                {" "}
                <img src="../Domains/aiml.png" alt="" />
                <p>AI/ML</p>
              </div>
            </div>
          </div>
          <div className="domain-container" id="">
            <div
              
              className={`domain-card ${isScrolled ? "flip-domain" : ""}`}
            >
              <div className="domain-front">
                {" "}
                <img src="../entering_area_51.png" alt="" />
              </div>
              <div className="domain-back">
                {" "}
                <img src="../Domains/blockchain.png" alt="" />
                <p>Blockchain</p>
              </div>
            </div>
          </div>

          <div className="domain-container" id="open-innovation">
            <div
              
              className={`domain-card ${isScrolled ? "flip-domain" : ""}`}
            >
              <div className="domain-front">
                {" "}
                <img src="../entering_area_51.png" alt="" />
              </div>
              <div className="domain-back">
                {" "}
                <img src="../Domains/openinnovation.png" alt="" />
                <p>Open Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
