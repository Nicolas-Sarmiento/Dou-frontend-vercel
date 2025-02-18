import React from "react";
import { useState } from "react";
import { LoginForm } from "../login/LoginForm";
import { RegisterForm } from "../login/RegisterForm";
import { ForgotPasswordForm } from "../login/ForgotPasswordForm";
import "../login/Login.css";

export function AuthContainer () {
    const [authMode, setAuthMode] = useState("login");

    const handleSwitchToRegister = (mode) => {
        setAuthMode(mode);
    }

    return (
        <>
            <div className="dou-login-container">
                {authMode === 'login' && (
                    <LoginForm 
                        onSwitchToRegister={() => handleSwitchToRegister("register")}
                        onSwitchToForgotPassword={() => handleSwitchToRegister("forgot-password")}
                    />
                )}
                {authMode === 'register' && (
                    <RegisterForm 
                        onSwitchToLogin={() => handleSwitchToRegister("login")}
                    />
                )}
                {authMode === 'forgot-password' && (
                    <ForgotPasswordForm 
                        onSwitchToLogin={() => handleSwitchToRegister("login")}
                    />
                )}
            </div>
        </>
    );
}