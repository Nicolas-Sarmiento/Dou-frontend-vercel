import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../components/main_page";

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<div>about</div>} />
        </Routes>
    );
}