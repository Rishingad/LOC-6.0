import './Home.css'
import { useEffect } from 'react';
const Home = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <>
            <div className="home-wrapper">
                <div className="content-wrapper">
                    <div className="title-wrapper">
                        LINES OF CODE 6.0
                    </div>
                    <div className="subtitle-wrapper">
                        A 24 hour National level hackathon conducted in hybrid mode organized by Dwarkadas J Sanghvi College of Engineering’s ACM Student Chapter
                    </div>

                    <div
                        className="apply-button"
                        data-hackathon-slug={"lines-of-code-djsce"}
                        data-button-theme={"light"}
                        style={{ height: '44px', width: '312px' }}
                    ></div>

                </div>

            </div>
            <div className="planet-wrapper">

                <img src="../../../public/blueplanet.jpeg" alt="" />

            </div>

        </>
    )
}

export default Home