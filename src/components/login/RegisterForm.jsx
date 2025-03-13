import React, { useState } from "react";
import { BackIcon } from "../dou_icons/BackIcon";
import "../login/login.css";

export function RegisterForm ( { onSwitchToLogin} ) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="dou-login-container">
            <button className="dou-back-login" onClick={ onSwitchToLogin }><BackIcon className="dou-back-icon" /></button>
            <form onSubmit={handleSubmit} className="dou-login-form">
                <input 
                    type="email"
                    className="dou-login-input"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}
