import React from "react";
import { useState } from "react";
import { AuthContainer } from "../components/LogIn";

export function AppUI () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {isLoggedIn ? (
                <p>Hola</p>
            ) : (
                <AuthContainer />
            )}
        </>
    )
}
