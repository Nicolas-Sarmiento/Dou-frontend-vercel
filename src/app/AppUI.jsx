import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/header";
import "./meteor.css";
import { AppRoutes } from "./AppRoutes";

export function AppUI () {
    

    return (
        <Router>
            <div className="app">
                <div className="star" id="position"></div>
                
                {[...Array(8)].map((_, index) => (
                    <div key={index} className={`meteor-${index + 1}`}></div>
                ))}
                
                <Header />
                <AppRoutes />
                
            </div>
            
        </Router>
    )
}
