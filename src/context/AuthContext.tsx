'use client';

import { createContext, useContext, useState } from "react";

type AuthContextType = {
    getIsLoggedIn: () => boolean | undefined;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    getIsLoggedIn: () => false,
    login: () => {},
    logout: () => {}
} as AuthContextType)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const login = (username: string) => {
        localStorage?.setItem('CleverPhotos::username', username);
        localStorage?.setItem('CleverPhotos::isLoggedIn', 'true');
    }

    const logout = () => {
        localStorage?.removeItem('CleverPhotos::isLoggedIn');
    }

    const getIsLoggedIn = () => {
        if(typeof localStorage !== 'undefined') {
            return localStorage.getItem('CleverPhotos::isLoggedIn') === 'true';
        }

        return undefined;
    }
    
    return (
        <AuthContext.Provider value={{ getIsLoggedIn, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
}