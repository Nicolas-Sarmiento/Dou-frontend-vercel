import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import "./dashboard.css";
import { useAuth } from "../../Context/AuthContext";

export function Dashboard () {
    const { user } = useAuth();
    const isExactDashboard = useMatch({path: "/dashboard", end: true});

    return (
        <>
            {user ? (
                <div className="dou-dashboard">
                    {isExactDashboard && (
                        <>
                            <h1>Bienvenido, {user.name}</h1>
                            <p>¡Estás en el dashboard!</p>
                        </>
                    )}
                    
                    <Outlet />
                </div>
            ) : (
                <h1>Error al cargar el dashboard</h1>
            )}
        </>
    );
}