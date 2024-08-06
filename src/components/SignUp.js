import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Signup.css'
import google from '../assets/images/google.svg'

const Signup = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

    const togglePasswordVisibility1 = () => {
        setIsPasswordVisible1(!isPasswordVisible1);
    };

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        } else if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage('');
            console.log('Form submitted');
           
        }
    };

    return (
        <>
            <div class="signup-container">
                <div class="container">
                    <div class="form">
                        <h1>Sign up to start your Journey</h1>
                        <form action="" onSubmit={handleSubmit}>
                            <label for="">Email address</label>
                            <input type="email" placeholder="Please enter your e-mail" required />
                            <label for="">Create Password</label>
                            <div class="input-box">
                                <input type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Please enter your password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <i class="ri-eye-fill" id="show" style={{ display: isPasswordVisible ? "block" : "none" }}
                                    onClick={togglePasswordVisibility}></i>
                                <i class="ri-eye-off-fill" id="hide" style={{ display: isPasswordVisible ? "none" : "block" }}
                                    onClick={togglePasswordVisibility}></i>
                            </div>
                            <label for="">Confirm Password</label>
                            <div class="input-box">
                                <input type={isPasswordVisible1 ? "text" : "password"} id="password" placeholder="Please enter your password" required="required" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                                <i class="ri-eye-fill" id="show" style={{ display: isPasswordVisible1 ? "block" : "none" }}
                                    onClick={togglePasswordVisibility1}></i>
                                <i class="ri-eye-off-fill" id="hide" style={{ display: isPasswordVisible1 ? "none" : "block" }}
                                    onClick={togglePasswordVisibility1}></i>
                            </div>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <button>Next</button>
                            <p>or</p>
                            <button class="signup-google"><img src={google} alt="" /><span>Sign Up with Google</span></button>
                            <p>Already have an account? &nbsp;<Link to="/login">Log in here</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup