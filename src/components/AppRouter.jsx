import React, {useContext} from 'react';
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import Leaderboard from "../pages/leaderboard";
import Game from "../pages/game";
import Error from "../pages/error";
import Login from "../pages/login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
        ?
        <Routes>
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />}/>
        </Routes>
        :
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />}/>
            </Routes>

    );
};

export default AppRouter;