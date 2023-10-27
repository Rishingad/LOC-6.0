"use client"
import React from "react";
import { motion } from "framer-motion";
import "./Aboutus.css"

const AboutUs = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full mb-8">
            <motion.h1
                whileInView={{ y: [50, 0] }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                }}
                viewport={{ once: true }}
                id="about"
                className="heading text-[3rem] sm:text-[5rem] font-mono border-b-2 mb-10"
            >
                SELECT * FROM ABOUT
            </motion.h1>
            <motion.div
                whileInView={{ y: [50, 0] }}
                transition={{
                    delay: 0.2,
                    ease: 'easeInOut',
                    duration: 1,
                }}
                viewport={{ once: true }}
                className="text-xl space-x-2 text-justify sm:w-3/4 sm:text-3xl font-mono sm:text-left"
            >
                <div className='about_box border-2 px-8 my-5 rounded-xl shadow-md shadow-green-500' style={{ borderColor: "#70fb13"}}>
                    <span className="text">
                        Lines of Code (LOC) is not just your ordinary hackathon - it's a 24-hour coding extravaganza that has set the standard for innovation and fun in the tech world. We've successfully organized five spectacular editions of LOC, each more impressive than the last. Last year, we made it bigger and better with a prize pool of 1.2 lakh INR.
                        Hosted by DJSCE's ACM student chapter, LOC is all about celebrating the spirit of coding and creativity. We provide a platform for tech enthusiasts to come together, collaborate, and turn their wildest ideas into reality. It's where innovation meets the keyboard, and the results are nothing short of spectacular.
                        Join us for the next session of LOC and experience the thrill, the learning, and the camaraderie that define our hackathon. Whether you're a seasoned coder or just starting your coding journey, LOC is your stage to shine. Get ready to code, collaborate, and create, because LOC is where innovation comes to life.
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;