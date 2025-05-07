import React from 'react';
import image from './images/image.png';
import { Link } from 'react-router-dom';


const Body = () =>{
    return(

        <>
        <div className='Body' style={{backgroundColor:'rgb(27, 70, 83)'}}>
            <div className='comtainer mt-5' >
                <div className='row'>
                    <div className='col-sm-8'>
                         <img className='image' src={image} alt='image'/>  
                    </div>
                    <div className='col-sm-4 body123'>
                        <br/>
                        <p className='p1' style={{color:'white'}}>WINDOWSWAP ALL-ACCESS</p>

                        <br/><br/>
                        <h5 style={{color:'rgb(216, 151, 112)'}}>Get access to all<br/>
                             windows ever uploaded,<br/>
                            unlimited bookmarks, <br/>
                            playlists and even a<br/>
                             back button. </h5>
                        <p>
                            <Link className='button1' to='/upgrade'>Upgrade for $5 monthly </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Body;