import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

export function LoginForm ( { onSwitchToRegister, onSwitchToForgotPassword } ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!email || !password) {
            setError("Debes completar todos los campos");
            return;
        }

        // try {
        //     const response = await fetch(' http://localhost:3001/login', 
        //         {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'x-access-token': "provisional"
        //             },
        //             body: JSON.stringify({email, password})
        //         }
        //     );

        //     if ( !response.ok ){
        //         setAttempts(attempts + 1);
        //         if (attempts >= 3) {
        //             setError("Demasiados intentos. Intentalo en un minuto");
        //             setTimeout( () => {
        //                 setAttempts(0), 60000;
        //             })
        //         } else {
        //             setError("Credenciales invalidas");
        //         }
        //         setLoading(false);
        //         return; 
        //     }

        //     const data = await response.json();
        //     setUser(data);
        //     setIsLoggedIn(true);
        //     navigate("/");

        // } catch (error) {
        //     setError("Error al iniciar");
        // } finally {
        //     setLoading(false);
        // }

        if (email === 'algo@gmail.com' && password === '1234') {
            
            setIsLoggedIn(true);
            setLoading(false);
            navigate("/dashboard");
            
        }
        
        console.log(email, password);
        setError('');
    };
    
    return (
        <div className="dou-login-container">
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
        </div>
    );
}
