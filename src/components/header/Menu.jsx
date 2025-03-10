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
            ></div>
            {showOptions && (
                <div className="dou-strip-options">
                    <button className="dou-strip-button">Contenido</button>
                    <button className="dou-strip-button">Contest</button>
                    <button className="dou-strip-button">Ejercicios</button>
                </div>
            )}
        </div>
    );

}