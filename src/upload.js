import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";


const Upload = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: 'true',
        })
    }, []);


    return (
        <div className="upload" >
            <h3 data-aos= "fade-down" data-aos-duration= "800">WindowSwap</h3>
            <div className="container mt-5" style={{paddingTop:'150px'}}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 uploadBtn">
                        <div className="Space" onClick="">
                        <img></img>
                        </div>
                        <h3 style={{color:'rgb(38, 93, 110)', textAlign:'center'}}>Drag and drop your file <br/> here
                        or hit ‘+’ to upload your video </h3>

                    </div>
                    <div className="col-md-5" >
                        <h1 className="lilMove" data-aos="fade-up" data-aos-duration="1000" style={{textAlign:'center'}}>Share 10 minutes of your window view</h1>
                        <br/>
                        <ol className="larMove" data-aos="fade-up" data-aos-duration="700">
                            <li>Record a 10 minute, horizontal, HD video of your view. </li>
                            <br/>
                            <li>Make sure to capture at least part of your window or balcony door frame in the shot. </li>
                            <br/>
                            <li>Keep your camera or phone steady. Please do not shake or move about while recording! </li>
                        </ol>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}


export default Upload;