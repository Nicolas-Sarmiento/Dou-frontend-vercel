import React, { createContext, useState, useContext, useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";


const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); 
    const [token, setToken] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            setUser({
                id: 1,
                email: "usuario@ejemplo.com",
                name: "Federico",
            });
            navigate("/dashboard", {replace: true});
        } else {
            navigate("/login", {replace: true});
        }
        setLoading(false);
    }, []);


    const login = async (email, password) => {
        try {
            
            if (email === "test@example.com" && password === "12345") {
               
                const fakeToken = "fake-jwt-token-123";
                const fakeUser = {
                    id: 1,
                    email: email,
                    name: "Federico",
                };

                setToken(fakeToken);
                setUser(fakeUser);
                localStorage.setItem("token", fakeToken);
                console.log("Iniciaste sesión correctamente");
                navigate("/dashboard", {replace: true});
            } else {
                throw new Error("Credenciales inválidas");
            }
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        navigate("/login", {replace: true});
    };

    
    const value = {
        user,
        token,
        loading,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
}