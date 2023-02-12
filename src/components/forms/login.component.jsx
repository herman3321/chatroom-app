import React from "react";
import './style.scss'

const Login = () =>{
    return(
        <div className="formContainer">
            <div className="formWrapper">
            <h2>Chat Room</h2>
                <form>
                    <input type='email' placeholder="Email"/>
                    <input type='password' placeholder="password"/>
                    <button className="btn">Log in</button>
                </form>
                <p>you don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login
