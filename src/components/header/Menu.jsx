import React, { useEffect } from "react";
import "../header/header.css";
import { useState } from "react";

export function LinkModules() {
    const [showOptions, setShowOptions] = useState(false);
    const [isDropdownVisible, setIsDropdownVisibleOpen] = useState(false);

    useEffect( () => {
        if (showOptions) {
            setIsDropdownVisibleOpen(true);
        } else {
            const timer = setTimeout(() => {
                setIsDropdownVisibleOpen(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [showOptions]);

    return (
        <div className="dou-strip">
            <div
                className="dou-strip-button"
                onClick={() => setShowOptions(!showOptions)}
            >
                <div className="dou-menu-line"></div>
                <div className="dou-menu-line mid"></div>
                <div className="dou-menu-line"></div>
            </div>
            {isDropdownVisible && (
                <div className={`dou-strip-options ${showOptions? "open": ""}`}>
                    <button className="dou-strip-option">Contenido</button>
                    <button className="dou-strip-option">Contest</button>
                    <button className="dou-strip-option">Ejercicios</button>
                </div>
            )}
        </div>
    );

}