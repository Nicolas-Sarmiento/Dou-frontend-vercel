import React from "react";
import "./main_page.css";
import { AuthContainer } from "../LogIn";

export function MainPage () {
    return (
        <>
            <div className="main_page">
                <AuthContainer />
            </div>
        </>
    );
}