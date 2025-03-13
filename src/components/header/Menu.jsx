import React from "react";
import "../header/header.css";
import { useState } from "react";

export function LinkModules() {
    const [showOptions, setShowOptions] = useState(false);
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
            {showOptions && (
                <div className="dou-strip-options">
                    <button className="dou-strip-option">Contenido</button>
                    <button className="dou-strip-option">Contest</button>
                    <button className="dou-strip-option">Ejercicios</button>
                </div>
            )}
        </div>
    );

}