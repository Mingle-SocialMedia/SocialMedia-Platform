import React, { useState } from 'react';
import './Login.css'; 
import bg from "./images/bglog.jpg";
import { toast } from 'react-toastify';
import axios from 'axios'
import SignUp from './signup';
import { Link } from 'react-router-dom';
const Login = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const VerUSer=await axios.post('http:localhost:6700/VerUser',{
                Email,
                Password
            })
            if(!VerUSer){
                toast.error(VerUSer.data.Msg)
            }
            toast.success(VerUSer.data.Msg)

        }catch(err){
            toast.error(err)
        }
        console.log(VerUSer)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="main-cont-log">
            <div className="main-cent-div">
                <div className="log-img">
                    <img src={bg} alt="Background" />
                </div>
                <div className="log-div">
                    {isSignUp ? (
                        <>
                            <SignUp />
                            <p className="login-link">
                                Already have an account?{' '}
                                <a href="#login" onClick={handleToggle}>Login</a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="login-button">Login</button>
                            </form>
                            <p className="signup-link">
                                Don't have an account?{' '}
                                <a href='#signup' onClick={handleToggle}>Sign Up</a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
