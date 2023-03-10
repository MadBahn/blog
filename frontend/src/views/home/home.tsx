import React, { useState, useEffect } from 'react';

import "./home.scss";
import Login from "../../components/login/login";
import Register from "../../components/register/register";

function Home(props) {

    const [isLogin, setIsLogin] = useState(false);
//    检查是否登录
    useEffect(() => {

    }, []);

    return (
         <div>
            <div>
                home
            </div>
            <Login />
            <Register />
         </div>
    );
}

export default Home;