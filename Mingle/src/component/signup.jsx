import React, { useState } from 'react';
import './signup.css'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const SignUp = () => {
    const [username, setName] = useState('');
    const [PhoneNo, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            if (!username || !PhoneNo || !Email || !Password || !confirmPassword) {
                toast.error('All fields are required.');
                return;
            }
            if (Password !== confirmPassword) {
                toast.error('Passwords do not match.');
                return;
            }
            const Add=await axios.post('http:/localhost:6700/Signup',{
              username,
              PhoneNo,
              Email,
              Password,
            })
            if(Add.data.Msg==="new user created"){
                toast.success(Add.data.Msg);
            }
            else{
                toast.error(Add.data.Msg)
            }

        }catch(err){

        }
        console.log('Name:', username);
        console.log('Phone:', PhoneNo);
        console.log('Email:', Email);
        console.log('Password:', Password);
        console.log('Image:', image.name);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group2">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={username}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={PhoneNo}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group2">
                            <label htmlFor="image">Profile Image:</label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <button type="submit" className="login-button">Sign Up</button>
                    </form>
                    </>
    );
};

export default SignUp;
