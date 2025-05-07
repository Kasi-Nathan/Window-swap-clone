import React from "react";
import { Link } from "react-router-dom";
import img from './images/Map.png'
import img2 from './images/upbodyimg.png'
import img3 from './images/image3desktop.png'
import img4 from './images/image3mobile.png'
import img5 from './images/backfoot1.png'
import img6 from './images/backfoot2.png'
import img7 from './images/backfoot3.png'


const Upgrade = () => {
    return (
        <>
            <h5 style={{ textAlign: 'center', color: 'rgb(38, 93, 110)', fontWeight: 'bold' }}>WindowSwap</h5>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-12 col-md-3 offset-md-1">
                        <div className="upgrade1" >
                            <h3 style={{ color: ' rgb(38, 93, 110)' }} >Open a new world
                                of calming windows
                                and helpful features. </h3>
                            <br />
                            <p style={{ color: 'rgb(202, 115, 88)' }} >Get WindowSwap All-Access for
                                <span style={{ fontWeight: 'bold' }}>$5 a month or $50 a year.</span></p>
                            <br />
                            <p><Link className="button1" to="">Upgrade to All-Access</Link></p>
                        </div>


                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>

            <div className="upbody1">
                <div className="container mt-5 upbody11">
                    <div className="row">
                        <div className="col-12 col-md-8" style={{ float: 'right' }}>
                            <img className="img" src={img} alt="img" ></img>
                        </div>
                        <div className="col-12 col-md-3 upbody12">
                            <h3>A new way to
                                explore incredible
                                views from around
                                the world.</h3>
                            <br />
                            <p>Now, you can use a map or a
                                searchbar to find relaxing new views
                                from different countries.</p>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <br /><br />

            </div>
            <div className="container mt-5" style={{ paddingBottom: '40px', paddingTop: '50px', paddingBottom: '110px' }}>
                <div className="row">
                    <div className="col-12 col-md-3 offset-md-2 upbody3" style={{ paddingTop: '35px' }}>
                        <h3>Thousands of calming views at your discretion</h3>
                        <p>Access our entire archive of windows ever uploaded</p>
                        <p><Link className="button1" to="">Upgrade to All-Access</Link></p>

                    </div>
                    <div className="col-12 col-md-5 offset-md-1">
                        <img className="mx-auto d-block upbodyimg" src={img2} alt="imgg"></img>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
            <div className="back">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-2"> </div>
                        <div className="col-sm-8" style={{ textAlign: 'center' }}>
                            <h2 style={{ color: ' rgb(202, 115, 88)' }}>What brings you peace?</h2>
                            <h2 style={{ color: ' rgb(202, 115, 88)' }}>A snowy day? Furry pets lounging around?</h2>
                            <h2 style={{ color: ' rgb(202, 115, 88)' }}>Or just the never ending sound of rain?</h2>
                            <br />
                            <img className="desktop" src={img3} alt="img"></img>
                            <img className="mobile" src={img4} alt="img"></img>
                            <br />
                            <p style={{ color: ' white' }}>Get just the type of windows you want with WindowSwap Playlists.</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>

            <div style={{textAlign:'center', color:'rgb(38, 93, 110)', paddingTop:'30px', paddingBottom:'30px'}}>
                <h2>Plus a host of other great features</h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-2 offset-md-3">
                            <img className="footimg"  src={img5} alt="img"></img>
                            <p>Unlimited bookmarks</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <img className="footimg" src={img6} alt="img"></img>
        
                            <p><br/>Access to
                            a back button!</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <img className="footimg" src={img7} alt="img"></img>
                            <p>More features
                            coming soon!</p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <p style={{textAlign:'center', paddingBottom:'30px'}}><Link className="button1"  to="">Upgrade to All-Access</Link></p>

        </>
    )
}

export default Upgrade;