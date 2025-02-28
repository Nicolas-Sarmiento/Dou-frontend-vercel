import React from "react";
import { BackIcon } from "../dou_icons/BackIcon";

export function ForgotPasswordForm ({ onSwitchToLogin }) {
    return (
        <>
        <div className="dou-login-form-forgot-password">
            <button className="dou-back-login" onClick={ onSwitchToLogin }><BackIcon  className="dou-back-icon"/></button>
            <h2>Si has perdido tu contrasena, por favor contacta al administrador. Aun no tenemos esta funcion directa disponible</h2>
        </div>
            
        </>
    );
}
