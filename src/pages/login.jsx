import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [AuthName, setAuthName] = useState(0)
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        localStorage.setItem('balance', '500')
        localStorage.setItem('name', AuthName)
    }
    return (
        <div>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="Введите логин" onChange={e => setAuthName(e.target.value)}/>
                <input type="password" placeholder="Введите пароль"/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Login;