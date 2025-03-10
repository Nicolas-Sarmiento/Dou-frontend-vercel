import React from "react";
import "./dashboard.css";
import { useAuth } from "../../Context/AuthContext";

export function Dashboard () {
    const { user } = useAuth();

    return (
        <>
            {user ? (
                <div className="dou-dashboard">
                    <h1>Bienvenido, {user.name}</h1>
                    <p>¡Estás en el dashboard!</p>
                </div>
            ) : (
                <h1>Error al cargar el dashboard</h1>
            )}
        </>
    );
}