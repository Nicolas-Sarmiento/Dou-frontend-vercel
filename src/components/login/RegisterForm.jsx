import React, { useState } from "react";
import { BackIcon } from "../dou_icons/BackIcon";
import "../login/login.css";
import { DynamicText } from "../DynamicText";

export function RegisterForm ( { onSwitchToLogin} ) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const phrases = ["Bienvenido a DOU", "Gracias por el registro", "Esperamos que lo disfrutes"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = e.target.password.value;
    }
    return (
        <div className="dou-login-container">
            <button className="dou-back-login" onClick={ onSwitchToLogin }><BackIcon className="dou-back-icon" /></button>
            <DynamicText phrases={phrases}/>
            <form onSubmit={handleSubmit} className="dou-login-form register">
                <input 
                    type="email"
                    className="dou-login-input"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <div className="dou-form-row">
                    <input 
                        type="password"
                        name="password"
                        className="dou-login-input password"
                        placeholder="Contrasena"
                        required
                    />
                    <input 
                        type="password"
                        name="password2"
                        className="dou-login-input password"
                        placeholder="Confirma Contrasena"
                        required
                    />
                </div>
                
                <input 
                    type="text"
                    name="name"
                    className="dou-login-input"
                    placeholder="nombre"
                    required
                />
                <input 
                    type="text"
                    name="lastname"
                    className="dou-login-input"
                    placeholder="apellido"
                    required
                />
                <div className="dou-form-row">
                    <input 
                        type="date"
                        name="birthdate"
                        className="dou-login-input"
                        placeholder="Nacimiento"
                        required
                    />
                    <input 
                        type="text"
                        name="nickname"
                        className="dou-login-input"
                        placeholder="Apodo"
                        required
                    />
                </div>
                <button 
                    className="dou-login-button-submit"
                    type="submit"
                >
                    Registrarme!!
                </button>
                

            </form>
        </div>
    );
}
