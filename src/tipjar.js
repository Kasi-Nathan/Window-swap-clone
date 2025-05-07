import React from "react";
import { Link } from "react-router-dom";
import img1 from "./images/tip.png"

const Tipjar = () => {
    return (
        <>
            <div className="tip">
                <br /> <br />
                <nav className="navbar navbar-expand-lg navbar-light bg-black">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ color: 'rgb(227, 154, 130)', fontSize: '30px', fontWeight: '600', paddingLeft: '60px' }} to="#" tabindex='-1' >WindowSwap Blog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: '19px' }} to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: '19px' }} to="#">Blog</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: '19px' }} to="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: '19px' }} to=""><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ fontSize: '19px' }} to=""><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <h1 className="tipintro">Introducing the Tip Jar</h1>
                            <br/>
                            <p className="tippara">The window views on WindowSwap are a magical thing. </p>
                            <p className="tippara">They are beautiful slices of life of beautiful strangers, somewhere in the world, that bring calm, joy, and a sense of freedom to many.</p>
                            <p className="tippara">We want to give due credit to these amazing views on WindowSwap
                                by making it easier for you to support each other.</p>

                            <div style={{display:'flex'}}>
                            <img src={img1} className="tipimg" alt="img"></img>
                            <div className="tip1" >
                                <h2>Introducing <br/>
                                The Tip Jar</h2>
                                <p className="tippara">A new way for people to send and receive tips. </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tipjar;