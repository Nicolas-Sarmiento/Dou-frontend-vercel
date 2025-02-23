import React from "react";

export function ForgotPasswordForm ({ onSwitchToLogin }) {
    return (
        <>
        <div className="dou-login-form-forgot-password">
            <button className="dou-back-login" onClick={ onSwitchToLogin }>Atrás</button>
            {/* <form onSubmit={handleSubmit} className="dou-login-forgot-password"> */}
            <a href="/forgot-password">
                <h2>Si has perdido tu contrasena, por favor contacta al administrador. Aun no tenemos esta funcion directa disponible</h2>
            </a>
            {/* </form> */}
        </div>
            
        </>
    );
}
