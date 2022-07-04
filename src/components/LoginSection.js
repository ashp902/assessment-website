import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import "./css/LoginSection.css";

function LoginSection() {
    return ( <div className = "login-main" >
        <div className = "login-container" >
        <
        h2 > Login < /h2> <
        hr / >
        <
        input type = "text"
        placeholder = "Roll Number" / >
        <
        input type = "password"
        placeholder = "Password" / >
        <
        Link to = "/studentProfile" >
        <
        button > submit < /button> <
        /Link> <
        Link to = "/adminlanding" >
        <
        button > Login as Admin < /button> <
        /Link> <
        /div> <
        /div>
    );
}


export default LoginSection;