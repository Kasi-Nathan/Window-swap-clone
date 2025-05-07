import React from 'react';
import img2 from './images/image2.png'

const Body2 = () =>{
    return(
        <>
        <div className = 'Body2' >
            <img className='image2' src={img2} alt="images"/>
            <h5>Help us make WindowSwap better.</h5>
            <br/>
            <p>
                <a className='button2' href='#'>Take our survey!</a>
            </p>
        </div>
        </>
    )
}

export default Body2;