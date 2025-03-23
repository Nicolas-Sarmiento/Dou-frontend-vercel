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
        return user ? children : <LoginForm onSwitchToRegister={() => navigate("/Dou-frontend/register")} onSwitchToForgotPassword={() => navigate("/Dou-frontend/forgot-password")} />;
    }
    
    return (
        <AppContainer>
            <Routes>
                <Route
                    path="/Dou-frontend/login"
                    element={
                        <LoginForm
                            onSwitchToRegister={() => navigate("/Dou-frontend/register")}
                            onSwitchToForgotPassword={() => navigate("/Dou-frontend/forgot-password")}
                        />
                    }
                />
                <Route path="/Dou-frontend" element={<Navigate to="/Dou-frontend/login" replace />} />
                
                <Route
                    path="/Dou-frontend/register"
                    element={<RegisterForm onSwitchToLogin={() => navigate("/Dou-frontend/login")} />}
                />
                <Route
                    path="/Dou-frontend/forgot-password"
                    element={<ForgotPasswordForm onSwitchToLogin={() => navigate("/Dou-frontend/login")} />}
                />
                <Route path="/Dou-frontend/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
                    <Route path="education" element={<EducationContent/>} />
                </Route>

                <Route path="/Dou-frontend/about" element={<About />} />
                
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </AppContainer>
    );
}