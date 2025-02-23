import React from "react";
import "./main_page.css";
import { Header } from "../header";
import { AuthContainer } from "../LogIn";

export function MainPage () {
    return (
        <>
            <div className="main_page">
                <Header className="dou-header-fix"/>

                <div className="dou-main-content">
                    
                </div>

                <AuthContainer style={{
                        gridColumn: "2 / -3",
                        gridRow: "2 / -1"
                    }}/>
            </div>
        </>
    );
}