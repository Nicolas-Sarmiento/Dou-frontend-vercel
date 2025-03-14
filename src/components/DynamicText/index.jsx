import React, {useState, useEffect} from "react";
import "./DynamicText.css"

export function DynamicText ( { phrases, interval = 4000, typingSpeed = 200, deletingSpeed = 60, pauseBeforeDeleting = 500 } ) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect ( () => {
        let timer;
        const updateText = () => {
            const phrase = phrases[currentIndex];
            if (!isDeleting) {
                if (currentText.length >= phrase.length) {
                    timer = setTimeout(() => setIsDeleting(true), pauseBeforeDeleting);
                    return;
                }

                const nextChar = phrase[currentText.length];
                setCurrentText((prevText) => prevText + nextChar);
            } else {

                setCurrentText((prevText) => prevText.slice(0, -1));

                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length); 
                }
            }
        };

        timer = setTimeout(updateText, isDeleting ? deletingSpeed: typingSpeed);

        return () => clearTimeout(timer);

    }, [currentText, isDeleting, currentIndex, phrases, interval, typingSpeed, deletingSpeed, pauseBeforeDeleting]);

    return (
        <div className="dou-dynamic-text">
            <p>{currentText}</p>
        </div>
    );
}