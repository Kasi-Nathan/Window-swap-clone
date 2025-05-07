import React from "react";
import background from './images/background1.png'
import { Link } from "react-router-dom";

const Body3 = () => {
    return(
        <>
        <div className='Body3'>
            <div className="text">
                <h1 style={{fontWeight:'bold'}}>The Tip Jar</h1>
                <h5>Send someone a tip as thanks for sharing a window<br/> view - or receive tips from someone who loved yours</h5>
                <br/>
                <p>
                <Link className='button3' to='/tipjar'>Find out how</Link>
                </p>
            </div> 
        </div>
        </>
    )
}

export default Body3;