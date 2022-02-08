import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import MyButton from "../UI /button/MyButton";

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
        <div className="box">
            <form onSubmit={login}>
                <div className="input-container">
                    <input type="text" placeholder="Введите логин" onChange={e => setAuthName(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Введите пароль"/>
                </div>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;