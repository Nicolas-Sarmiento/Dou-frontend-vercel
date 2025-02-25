import React from "react";
import "./main_page.css";
import { AuthContainer } from "../LogIn";

export function MainPage () {
    return (
        <>
            <div className="main_page">
                <div className="dou-main-content">
                    
                </div>

                <AuthContainer style={{
                        gridColumn: "2 / -1",
                        gridRow: "2 / -1"
                    }}/>
            </div>
        </>
    );
}