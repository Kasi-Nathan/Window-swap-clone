import React from "react";
import { Link } from "react-router-dom";
import img1 from './images/newsimg1.png';
import img2 from './images/newsimg2.jpg';
import img3 from './images/newsimg3.jpg';
import img4 from './images/newsimg4.png';

const Latest_News = () => {
    return (
        <>

            <div className="latestnews">
                <br /> <br />
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        <Link className="navbar-brand newstopic" style={{color:'rgb(95, 94, 94)'}}  to="#" tabindex='-1' >WindowSwap Blog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'rgb(95, 94, 94)', fontSize: '19px' }} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" style={{ color: 'rgb(95, 94, 94)', fontSize: '19px' }} to="/latest_news" >Blog</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link " style={{ color: 'rgb(95, 94, 94)', fontSize: '19px' }} aria-current="page" to="/about">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color:'rgb(95, 94, 94)', fontSize: '19px' }} to=""></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: 'rgb(95, 94, 94)', fontSize: '19px' }} to=""></Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3" style={{ textAlign: 'center', color: 'white' }}>
                            <h1 style={{ fontWeight: 'bold', color:'white' }}>WindowSwap is here to fill that deep void in our wanderlust hearts by allowing us to look through someone else's window, somewhere in the world.</h1>
                        </div>
                        <div className="col-md-3"></div>
                    </div>



                </div>
                <br />

            </div>
            <h2 style={{ textAlign: 'center', color:'rgb(227, 154, 130)' }}>LATEST UPDATES</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <h2 className="introup">Introducing the Tip Jar </h2>
                        <img className="newsimg1" src={img1} alt="img"></img>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" style={{textAlign:'center'}}>
                        <h2 className="introdown">Introducing the Tip Jar </h2>
                        {/* <p>read more</p> */}
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" style={{textAlign:'center'}}>
                        <h1 className="yayup">YAAAAAY! 100K!  </h1>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="newsimg1" src={img2}  alt="img"></img>
                       
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="musicup">The WindowSwap Music Video  </h1>
                        <img className="newsimg1" src={img3} alt="img"></img>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center vh-70" style={{textAlign:'center'}}>
                        <h1 className="musicdown" >The WindowSwap Music Video  </h1>
                    </div>
                </div>
            </div>

            <div className="container mt-5" style={{marginBottom:'10px'}}>
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center vh-70" style={{textAlign:'center'}}>
                        <h1>All new WindowSwap is here!</h1>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="newsimg1" src={img4} alt="img"></img>
                    </div>
                </div>
            </div>

            <div className="newsbody">
                <h1 id="newsbodyhead" style={{ color: 'rgb(202, 115, 88);' }}>Buy us a coffee</h1>
                <p>Server space is expensive and it's just the two of us.</p>
                <p>So, if you love window swap, please help us keep it alive.</p>
                <p>Click the button to buy us a coffee, </p>
                <p>or pay us directly via Paypal at vtwelve@outlook.com</p>
                <p style={{ textAlign: 'center', paddingBottom: '30px' }}><Link className="button1" to="/coffee">Buy us a coffee</Link></p>
            </div>
            <div style={{ backgroundColor: 'rgb(227, 154, 130)', paddingBottom: '200px' }}>
                <br />
                <div className='container mt-5'>
                    <div className="row" >
                        <div className='col-sm-6' style={{ color: 'white', textAlign: 'center', fontSize: '23px', fontWeight: '600' }}>
                            <p>Questions, feedback or just 👋</p>
                            <p><Link className="footermail" to="mailto:qunaliaa@gmail.com">qunaliaa@gmail.com</Link> </p>
                        </div>
                        <div className='col-sm-6' style={{ color: 'white', textAlign: 'center', fontSize: '23px', fontWeight: '600' }}>
                            <p>Brand and Artist collabs?</p>
                            <p><Link className="footermail" to="mailto:hello@window-swap.com">hello@window-swap.com</Link></p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Latest_News;