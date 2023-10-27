"use client";

import { useState, useEffect } from "react";
import './SplashOverlay.css';
import LetterAnimation from '../LetterAnimation/LetterAnimation'
function SplashOverlay({ className }) {

    return (
        <div className={`splash-overlay z-10 relative ${className}`}>
            {[...Array(10)].map((_, index) => (
                <div
                    className="splash-bar"
                    key={index}
                    style={{ transitionDelay: `${0.05 * (index + 1)}s` }}
                ></div>
            ))}

            {className == "show" && <LetterAnimation className={"center-text"} sentence="LINES OF CODE" />}
            {className == "show" && <LetterAnimation className={"topLeft"} sentence="LINES OF CODE" />}
            {className == "show" && <LetterAnimation className={"topRight"} sentence="LINES OF CODE" />}
            {className == "show" && <LetterAnimation className={"bottomLeft"} sentence="LINES OF CODE" />}
            {className == "show" && <LetterAnimation className={"bottomRight"} sentence="LINES OF CODE" />}


        </div>

    );
}

export default SplashOverlay;
