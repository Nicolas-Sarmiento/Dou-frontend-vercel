import React from "react";
import "./main_page.css";
import "./meteor.css";
import { AuthContainer } from "../LogIn";

export function MainPage () {
    return (
        <>
            <div className="main_page">
                <div className="star" id="position"></div>
                
                {[...Array(8)].map((_, index) => (
                    <div key={index} className={`meteor-${index + 1}`}></div>
                ))}

                <AuthContainer />
            </div>
        </>
    );
}