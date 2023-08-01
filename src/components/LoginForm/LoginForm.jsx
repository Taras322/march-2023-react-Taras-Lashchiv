import React from 'react';
import {useLocation} from "react-router-dom";

const LoginForm = () => {

    const path = useLocation();
    console.log(path);

    return (
        <form>
            <span>Login</span>
            <input type={'text'}/>
            <span>Password</span>
            <input type={'password'}/>
        </form>
    );
};

export default LoginForm;