import React from "react";
import { Link } from "react-router-dom";
import img from './images/coffee.webp'

const Coffee = () =>{
    return(
        <>
        <h1>hello</h1>

        <div className="coffee">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 offset-2" style={{backgroundColor:'white', borderRadius:'15px', paddingTop:'10px'}}>
                        <h6 style={{fontWeight:'bold'}}>About WindowSwap</h6>
                        <p>Creating a way to travel without moving</p>
                        <img src={img} className="coffeeimg mb-4" alt="img"></img>
                        <p>Server space is expensive and it's just the two of us.<br/>
                        So, if you love window swap, please help us keep it alive.</p>
                        <br/>
                        <div style={{lineHeight:'6px'}}>
                        <p style={{fontWeight:'bold'}}>Buy us a coffee</p>
                        <p>for one time support</p>
                        </div>
                        <br/>
                        <div style={{lineHeight:'6px'}}>
                        <p style={{fontWeight:'bold'}}>Become a member</p>
                        <p>supporting us every month.</p>
                        </div>
                        <p><Link to=""></Link></p>
                        



                    </div>
                    <div className="col-md-4 buyingcoffee">
                        <h4 style={{fontWeight:'bold', marginTop:'10px'}}>Buy WindowSwap a coffee</h4>
                        <form className="coffeeform">
                            <ul className="coffeelist">
                                <li className="coffeelistvalue" style={{borderStyle:'none', backgroundColor:'white', fontSize:'50px'}}>☕</li>
                                <li className="coffeelistvalue">X</li>
                                <li className="coffeelistvalue">1</li>
                                <li className="coffeelistvalue">3</li>
                                <li className="coffeelistvalue">5</li>
                                <li><textarea style={{width:'50px', resize:'none', borderRadius:'50%', borderStyle:'none', backgroundColor:' rgb(227, 227, 227)', textAlign:'center'}}></textarea></li>
                            </ul>
                            <br/>
            
                            <textarea className="coffeename" style={{width:'100%', height:'50px', borderRadius:'', marginBottom:'20px'}} placeholder="Enter your name"></textarea>
                            <textarea className="coffeename" style={{width:'100%', height:'100px'}} placeholder="Say Something nice"></textarea>
                            <br/>
                            <label> <br/><input type="checkbox"/> Make this Message Private </label><br/>
                            <label><input type="checkbox"/> Make this Monthly </label>
                            <br/>
                            <div style={{textAlign:'center'}}>
                                <br/>
                            <button className="coffeebutton" onClick={'submit'}>Support $<p id="support"></p></button>
                            </div>
                        </form>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6"><h1></h1></div>
                    <div className="col-md-4 buyingcoffee2">
                        <br/>
                        <h3 style={{fontWeight:'bold'}}>Become a member</h3>
                        <hr/>
                        <h5 style={{fontWeight:'bold'}}>Membership</h5>
                        <p><span className="tendoller">$10</span> /month</p>
                        <div style={{textAlign:'center'}}>
                        <button className="coffeebutton" onClick={'submit'}><p>Join</p></button>
                        </div>
                        <ul style={{marginTop:'30px'}}>
                            <li>Good Karma & all our love</li>
                            <li>Keep the windows open</li>
                        </ul>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Coffee;