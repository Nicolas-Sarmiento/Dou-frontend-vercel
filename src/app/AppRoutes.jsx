import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AppContainer } from "../components/AppContainer";
import { Dashboard } from "../components/Dashboard/index";
import { LoginForm } from "../components/login/LoginForm";
import { RegisterForm } from "../components/login/RegisterForm";
import { ForgotPasswordForm } from "../components/login/ForgotPasswordForm";
import { useAuth } from "../Context/AuthContext";
import { EducationContent } from "../components/Education_content";
import { About } from "../components/about";

export function AppRoutes () {
    const navigate = useNavigate();

    function ProtectedRoute({ children }) {
        const { user, loading } = useAuth();
        const navigate = useNavigate();
        if (loading) return <div>Cargando...</div>;
        return user ? children : <LoginForm onSwitchToRegister={() => navigate("/register")} onSwitchToForgotPassword={() => navigate("/forgot-password")} />;
    }
    
    return (
        <AppContainer>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <LoginForm
                            onSwitchToRegister={() => navigate("/register")}
                            onSwitchToForgotPassword={() => navigate("/forgot-password")}
                        />
                    }
                />
                <Route path="/" element={<Navigate to="/login" replace />} />
                
                <Route
                    path="/register"
                    element={<RegisterForm onSwitchToLogin={() => navigate("/login")} />}
                />
                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordForm onSwitchToLogin={() => navigate("/login")} />}
                />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
                    <Route path="education" element={<EducationContent/>} />
                </Route>

                <Route path="/about" element={<About />} />
                
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </AppContainer>
    );
}