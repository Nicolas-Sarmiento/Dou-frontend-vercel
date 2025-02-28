import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header () {
    const navigate = useNavigate();
    const handleMainClick = () => {
        navigate("/");
    };
    return (
        <div className="dou-header">
            <button className="dou-main-button" onClick={handleMainClick}>
                DOU
            </button>
            <button className="dou-header-button">
                <Link to="/about">Sobre nosotros</Link>
            </button>
        
        </div>
    );
}