import React from "react";
import "./header.css";

export function Header () {
    return (
        <div className="dou-header">
            <button className="dou-main-button">
                <a href=""></a>DOU
            </button>
            <button className="dou-header-button">
                <a href="/info_main">Sobre nosotos</a>
            </button>
        
        </div>
    );
}