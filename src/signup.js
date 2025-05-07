import React, { cloneElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "./images/signupimg.png"

const Signup = ({ handleSignUp }) => {

    const [mail, setMail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");

    const [errorMail, setErrormail] = useState("");
    const [errorfname, setErrorfname] = useState("");
    const [errorlname, setErrorLname] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const Navigate = useNavigate(); 

    const validateEmail = () => {
        if (!mail) {
            setErrormail("Email is required");
        } else {
            setErrormail("");
        }

    }

    const validatefname = () => {
        console.log("First name blur triggered");
        if (!fname) {
            setErrorfname("First name is Required");
        } else {
            setErrorfname("");
        }
    }

    const validateLname = () => {
        if (!lname) {
            setErrorLname("Last name is Required");
        } else {
            setErrorLname("");
        }
    }

    const validatePassword = () => {
        if (!password) {
            setErrorPassword("Password is Required");
        } else {
            setErrorPassword("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatefname();
        validateLname();
        validatePassword();

        if (mail && password && fname && lname && !errorMail && !errorPassword && !errorPassword && !errorfname && !errorlname) {
            handleSignUp(fname); // Ensure the function works
            Navigate("/login");
            setMail(""); setPassword(""); setFname(""); setLname(""); // Clear fields
        }
    }






    return (
        <>
            <div className="container-fluid " style={{ padding: '0', margin: '0' }}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img} className="loginimg1" alt="img"></img>
                    </div>
                    <div className="col-sm-6" style={{ backgroundColor: 'rgb(242, 239, 235)', textAlign: 'center' }}>
                        <br />
                        <h4 style={{ paddingBottom: '100px', color: ' rgb(38, 93, 110)', fontWeight: 'bold' }}>WindowSwap</h4>
                        <h1 style={{ color: "rgb(38, 93, 110)", fontWeight: 'bold' }}>Sign up to get the full WindowSwap experience</h1>

                        <ul style={{ textAlign: 'left', listStylePosition: 'inside', margin: '1rem auto', display: 'inline-block', color: ' rgb(38, 93, 110)' }}>
                            <li>Share your window with the world.</li>
                            <li>See the number of views your windows get</li>
                            <li>Send and receive tips as thanks.</li>
                            <li>Bookmark your favourite window views from around the world</li>
                        </ul>

                        <p style={{ color: 'rgb(208, 134, 111)' }}>Already have an account? <span ><Link className="signlink" to="/login">Login</Link></span></p>
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="Your Email Address" value={mail} className={`loginbox ${errorMail ? "input-error" : ""}`} onChange={(e) => setMail(e.target.value)} onBlur={validateEmail}></input>
                            {errorMail && <p className="error-text">{errorMail}</p>}
                            <br />


                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={fname}
                                    className={`firstname ${errorfname ? "input-error" : ""}`}
                                    onChange={(e) => setFname(e.target.value)}
                                    onBlur={validatefname}
                                />
                                {errorfname && <p className="error-text">{errorfname}</p>}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lname}
                                    className={`lastname ${errorlname ? "input-error" : ""}`}
                                    onChange={(e) => setLname(e.target.value)}
                                    onBlur={validateLname}
                                />
                                {errorlname && <p className="error-text">{errorlname}</p>}
                            </div>


                            {/* <br/><br/> */}
                            <input type="password" placeholder="Password" value={password} className={`loginbox ${errorPassword ? "input-error" : ""}`} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword}></input><br />
                            {errorPassword && <p className="error-text">{errorPassword}</p>}
                            <button type="submit" id="login">Signup</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;