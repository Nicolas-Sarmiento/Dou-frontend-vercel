import React from "react";
import { MainPage } from "../components/main_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../components/header";

export function AppUI () {
    

    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
                
            </div>
            
        </Router>
    )
}
