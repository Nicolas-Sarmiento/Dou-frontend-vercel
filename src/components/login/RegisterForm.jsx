import React from "react";
import { BackIcon } from "../dou_icons/BackIcon";

export function RegisterForm ( { onSwitchToLogin} ) {
    return (
        <>
            <button className="dou-back-login" onClick={ onSwitchToLogin }><BackIcon className="dou-back-icon" /></button>
            <div className="dou-register-form-container"></div>
        </>
    );
}
