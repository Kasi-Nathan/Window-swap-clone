import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container mt-5' >
                    <div className='row'>
                        <div className='col-12 col-md-8'>
                            <iframe className='yt' width="750" height="400"
                                src="https://www.youtube.com/embed/cFVd2fwK-OE?si=t2teGC3Sd-6V_Ezp"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                        </div>
                        <div className='col-12 col-md-3 footer12'>
                            <br />
                            <p className='p1' style={{ color: 'white' }}>WINDOWSWAP ARTISTS</p>

                            <br /><br />
                            <h5 style={{ color: 'rgb(216, 151, 112)', fontWeight: 'bold' }}>50 Windows. 30
                                Countries. 3 Artists.
                                1 Digital Choir.
                                1 worldwide collaborative
                                music video.  </h5>
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div>
                <br/>
                <ul className='d-flex list-unstyled' style={{ justifyContent: 'center' }}>
                    <li> <Link className='me-3' to=""><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</Link></li>
                    <li> <Link className='me-3' to=""><i class="fa fa-comment-o" aria-hidden="true"></i> Latest News</Link></li>
                    <li> <Link className='me-3' to=""><i class="fa fa-envelope" aria-hidden="true"></i> Contact</Link></li>
                    <li> <Link className='me-3' to=""><i class="fa fa-file-text" aria-hidden="true"></i> T&C's</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Footer