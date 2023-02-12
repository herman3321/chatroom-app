import React from "react";
import './style.scss'
import { FcAddImage } from 'react-icons/fc'

const Register = () =>{
    return(
        <div className="formContainer">
            <div className="formWrapper">
            <h2>Chat Room</h2>
                <form>
                    <input type='text' placeholder="Full Name"/>
                    <input type='email' placeholder="Email"/>
                    <input type='password' placeholder="password"/>
                    <input type='password' placeholder="confirmPassword"/>
                    <input style={{display:"none"}} type='file' id="file"/>
                    <label htmlFor="file">
                        <FcAddImage style={{fontSize: '1.7rem'}}/>
                        <span>Add an avatar/image</span>
                        </label> 
                    <button className="btn">Sign Up</button>
                </form>
                <p>you have an account? Register</p>
            </div>
        </div>
    )
}

export default Register