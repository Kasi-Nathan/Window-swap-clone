import React from "react";
import { Link } from "react-router-dom";
function About() {
    return (
        <>
            <div className="about">
                <br /> <br />
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ color: 'white', fontSize: '30px', fontWeight: '600', paddingLeft: '60px' }} to="#" tabindex='-1' >WindowSwap Blog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white', fontSize: '19px' }} to="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" style={{ color: 'white', fontSize: '19px' }} to="#" tabindex="-1">Blog</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" style={{ color: 'white', fontSize: '19px' }} aria-current="page" to="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white', fontSize: '19px' }} to=""></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'white', fontSize: '19px' }} to=""></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="aboutcontent">
                    <h6 style={{ color: 'white', fontSize: '18px' }}>Contact</h6>
                    <br />
                    <h1 className="Email">Questions and Feedback <br /><span style={{ fontWeight: 'bold' }}>
                        qunaliaa@gmail.com</span> </h1>
                    <br />
                    <h1 className="Email">Brand and Artist Collabs<br /><span style={{ fontWeight: 'bold' }}>
                        hello@window-swap.com</span></h1>


                </div>
                <br />

                <ul className="aboutlist">
                    <li style={{ color: 'white', listStyleType: 'none', fontSize: '18px' }}><Link>Follow</Link></li>
                    <li><Link className="Social" to={""}>Instagram</Link></li>
                    <li><Link className="Social" to={""}>Twitter</Link></li>
                </ul>
            </div>
            <div style={{ backgroundColor: 'rgb(227, 154, 130)', paddingBottom: '200px' }}> 
                <br/>
                <div className='container mt-5'>
                    <div className="row" >
                        <div className='col-sm-6' style={{ color: 'white', textAlign:'center', fontSize:'23px', fontWeight:'600' }}>
                            <p>Questions, feedback or just 👋</p>
                            <p><Link className="footermail" to="mailto:qunaliaa@gmail.com">qunaliaa@gmail.com</Link> </p>
                        </div>
                        <div className='col-sm-6' style={{ color: 'white', textAlign:'center',  fontSize:'23px',  fontWeight:'600'}}>
                            <p>Brand and Artist collabs?</p>
                            <p><Link className="footermail" to="mailto:hello@window-swap.com">hello@window-swap.com</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;