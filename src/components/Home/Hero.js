import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Hero.css'
const Hero = () => {
    return (
        <div className='home-section'>
            <Navbar></Navbar>
            <div className="main-wrapper">
                <div className="title">lines of code</div>
                <div className="coming-soon-wrapper">
                    2023-2024 COMING SOON!
                </div>
            </div>
        </div>
    )
}

export default Hero