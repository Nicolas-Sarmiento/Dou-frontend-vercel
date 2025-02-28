import React from "react";
import { BackIcon } from "../dou_icons/BackIcon";
import "../login/login.css";

export function RegisterForm ( { onSwitchToLogin} ) {
    return (
        <div className="dou-login-container">
            <button className="dou-back-login" onClick={ onSwitchToLogin }><BackIcon className="dou-back-icon" /></button>
            <div className="dou-register-form-container"></div>
        </div>
    );
}
