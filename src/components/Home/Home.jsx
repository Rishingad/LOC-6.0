import Aos from "aos";
import "./Home.css";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  // useEffect(() => {
  //     const script = document.createElement('script');
  //     script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //     script.async = true;
  //     script.defer = true;
  //     document.body.appendChild(script);
  //     return () => {
  //         document.body.removeChild(script);
  //     }
  // }, []);
  return (
    <>
      <div className="home-wrapper overflow-hidden">
        <div className="content-wrapper">
          <div data-aos="fade-left" className="title-wrapper">
            LINES OF CODE 6.0
          </div>
          <div className="subtitle-wrapper" data-aos="fade-right">
            A 24 hour National level hackathon conducted in hybrid mode
            organized by Dwarkadas J Sanghvi College of Engineering’s ACM
            Student Chapter
          </div>

          {/* <div
                        className="apply-button"
                        data-hackathon-slug={"lines-of-code-djsce"}
                        data-button-theme={"light"}
                        style={{ height: '44px', width: '312px' }}
                    ></div> */}
          <a
            data-aos="fade-up"
            className="apply-with-devfolio-wrapper"
            href="https://lines-of-code-djsce.devfolio.co/"
            target="_blank"
          >
            <div className="img-wrapper">
              <img src="../../../public/logo/devfolio_logo_white.png" alt="" />
            </div>
            <p>Apply with Devfolio</p>
          </a>
        </div>
      </div>
      <div className="planet-wrapper" data-aos="fade-up">
        <img src="../../../public/blueplanet.jpeg" alt="" />
      </div>
    </>
  );
};

export default Home;
