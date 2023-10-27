import React from 'react'
import Image from 'next/image'
import './Home.css'
import BoxAnimation from '../3dBox/BoxAnimation'
const HomePage = () => {
    return (
        <section className="home-section">
            <div className="banner-section">
                <div className="banner">

                    {/* <div className="home-backdrop"></div> */}
                    <div className="horizontal-hackathon-info">
                        <span>A 24-hour hackathon hosted by</span>
                        <span>DJSCE's ACM Student Chapter</span>
                    </div>
                    <div className="main-banner-heading">
                        <div>LINES</div>
                        <div>OF CODE</div>
                        <div>6.0</div>
                    </div>
                </div>
            </div>
            <div className="box-animation-wrapper mt-[6rem]">
                <BoxAnimation></BoxAnimation>
            </div>
        </section>

    )
}

export default HomePage
