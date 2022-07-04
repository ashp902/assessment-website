import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./css/LoginSection.css";

function LoginSection() {

    return (
        <div className="login-main">
            <div className="login-container">
                <h2>Login</h2>
                <hr/>
                <input id='userId' type="text" placeholder="Roll Number"/>
                <input id='password' type="password" placeholder="Password"/>
                <Link to='/studentProfile' ><button>Submit</button></Link>
            </div>
        </div>
    );
}

export default LoginSection;