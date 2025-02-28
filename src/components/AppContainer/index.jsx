import React from "react";
import "./main_page.css";

export function AppContainer ( {children} ) {
    return (
        <>
            <div className="main_page">
                {children}
            </div>
        </>
    );
}