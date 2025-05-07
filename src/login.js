import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./images/loginimg.png"
import { useState } from "react";

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();
    
    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Enter a valid email");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required");
        } else {
            setPasswordError("");
        }
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            validateEmail();
            validatePassword();

            if (email && password && !emailError && !passwordError) {
                handleLogin(email); // Ensure the function works
                setEmail(""); setPassword("");  // Clear fields
                navigate("/data");
            }
        };

    
    return (
        <>
            <div className="container-fluid " style={{ padding: '0', margin: '0' }}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img} className="loginimg" alt="img"></img>
                    </div>
                    <div className="col-sm-6" style={{ textAlign: 'center', backgroundColor: 'rgb(242, 239, 235)' }}>
                        <br />
                        <h5 style={{ paddingBottom: '100px' }}>WindowSwap</h5>

                        <p style={{ color: 'rgb(208, 134, 111)' }}>Don’t have an account? <span ><Link className="signlink" to="/signup">Sign up</Link></span></p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    className={`loginbox ${emailError ? "input-error" : ""}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={validateEmail}
                                />
                                {emailError && <p className="error-text">{emailError}</p>}
                            </div>


                            <div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    className={`loginbox ${passwordError ? "input-error" : ""}`}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={validatePassword}
                                />
                                {passwordError && <p className="error-text">{passwordError}</p>}
                            </div>

                            <button type="submit" id="login">Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;