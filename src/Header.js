import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>

            <div className='Nav'>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={{paddingTop:'25px'}}>
                    <div className="container-fluid" style={{color:'white'}}>
                        <Link className="navbar-brand buybutton" to="/coffee" style={{color:'white'}}><i class="fa fa-coffee" aria-hidden="true"></i> Buy us a coffee</Link>
                        <button className="navbar-toggler" style={{color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{color:'white'}}></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{color:'white'}} id="navbarNav">
                            <ul className="navbar-nav" style={{color:'white'}}>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/latest_news" style={{color:'white',fontSize:'13px'}}>Latest News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" style={{color:'white' ,fontSize:'13px'}}>contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="" style={{color:'white' ,fontSize:'13px'}}>Instagram</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link disabled" to="" tabindex="-1" aria-disabled="true">Disabled</Link>
                                </li> */}
                            </ul>

                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                    {/* <Link className="nav-link submitbut" to="">Submit</Link> */}
                                    <Link className="nav-link" style={{color:'white' ,fontSize:'13px'}} to="/upload">Submit</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" style={{color:'white' ,fontSize:'13px'}}>Login</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <h5 style={{textAlign:'center', color:'white', fontWeight:'bold'}}>WindowSwap</h5>

                <h4 className='heading'>
                    <Link className='headerheading' to='https://www.window-swap.com/Window'> Open a window somewhere in the world</Link>

                </h4>

            </div>
            <div>
                
            </div>
        </>
    )
}
export default Header;