import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter, Link, Redirect, Route} from "react-router-dom";
import Navbar from "./UI /navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


export default function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    })

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}