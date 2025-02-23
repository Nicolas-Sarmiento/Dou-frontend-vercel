import React from "react";
import { useState } from "react";

export function LoginForm ( { onSwitchToRegister, onSwitchToForgotPassword } ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Debes completar todos los campos");
            return;
        }
        
        console.log(email, password);
        setError('');
    };
    
    return (
        <>
            <form onSubmit={handleSubmit} className="dou-login-form">   
                <input
                    className="dou-login-input"
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}} 
                    required 
                />

                <input 
                    className="dou-login-input"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <div className="dou-login-forgot-password-container">
                    <button 
                    className="dou-login-button-forgot-password"
                    type="button" 
                    onClick={onSwitchToForgotPassword}
                    >
                    Olvide mi contraseña
                    </button>
                </div>
                
                
                <button 
                    className="dou-login-button-submit"
                    type="submit"
                >
                    Entrar
                </button>
                
                <p className="dou-login-register-text">
                    ¿No tienes una cuenta? 
                    <button 
                        className="dou-login-button-register"
                        type="button" 
                        onClick={onSwitchToRegister}
                    >
                    Regístrate
                    </button>
                    
                </p>

                

            </form>
        </>
    );
}
