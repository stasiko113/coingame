import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        localStorage.removeItem('name')
    }

    function navOut() {
        if(isAuth) {
            return <p>Hello, {localStorage.getItem('name')}</p>
        }
    }

    return (
        <div className="navbar">
            {navOut()}
            <MyButton style={{marginLeft: '5px'}} onClick={() => logout()}>logout</MyButton>
            <div className="navbar__links">
                <ul className="menu">
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;