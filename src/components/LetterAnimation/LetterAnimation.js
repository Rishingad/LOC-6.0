import React, { useState, useEffect } from "react";
import './LetterAnimation.css';

function LetterAnimation({ sentence, className }) {
    const [currentSentence, setCurrentSentence] = useState("");
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (sentence && isAnimating) {
            const interval = setInterval(() => {
                setCurrentSentence(generateRandomSentence(sentence));
            }, 100); // Change letter every 100 milliseconds

            setTimeout(() => {
                clearInterval(interval);
                setCurrentSentence(sentence); // Set the original sentence
                setIsAnimating(false);
            }, 1500); // Change for 3 seconds

            return () => {
                clearInterval(interval);
            };
        }
    }, [sentence, isAnimating]);

    const generateRandomSentence = (sentence) => {
        return sentence
            .split(" ")
            .map((word) => {
                return word
                    .split("")
                    .map((letter) =>
                        Math.random() < 0.5 ? getRandomLetter() : letter
                    )
                    .join("");
            })
            .join(" ");
    };

    const getRandomLetter = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letters[Math.floor(Math.random() * letters.length)];
    };

    return <div className={`text-7xl z-100 absolute text-overlay ${className}`}
    > {currentSentence}</div >;
}

export default LetterAnimation;
