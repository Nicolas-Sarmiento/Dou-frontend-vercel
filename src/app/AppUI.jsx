import React from "react";
import { MainPage } from "../components/main_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/header";
import "./meteor.css";

export function AppUI () {
    

    return (
        <Router>
            <div className="app">
                <div className="star" id="position"></div>
                
                {[...Array(8)].map((_, index) => (
                    <div key={index} className={`meteor-${index + 1}`}></div>
                ))}
                
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
                
            </div>
            
        </Router>
    )
}
