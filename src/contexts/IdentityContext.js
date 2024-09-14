
import React, {useEffect, createContext, useState } from 'react';
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";
export const IdentityContext = createContext();

export function IdentityProvider({ children }) {

    const [autenticado, setAutenticado] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null);
    
    useEffect(() => {
        init();
    }, []);

    async function init() {
        setLoading(true);
        const authClient = await AuthClient.create();
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal();

        if (!principal.isAnonymous()) {
            setAutenticado(true);
        }
        setLoading(false);
    }

    // Función para iniciar sesión
    const login = async () => {
        const authClient = await AuthClient.create();
        authClient.login({
            identityProvider: process.env.REACT_APP_INTERNET_COMPUTER_PROVIDER,
            onSuccess: async () => {
                setAutenticado(true);
            },
            onError: (err) => {
                console.error(err);
            },
        });
    };

    // Función para cerrar sesión
    const logout = async () => {
        const authClient = await AuthClient.create();
        await authClient.logout();
        setAutenticado(false);

    };

    return (
        <IdentityContext.Provider value={{autenticado, login, logout }}>
            {!loading && children }
        </IdentityContext.Provider>
    );
}
