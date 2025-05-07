import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Main from "./main";
import About from "./about";
import Upgrade from "./upgrade";
import Latest_News from "./latest_news";
import Coffee from "./coffee";
import Tipjar from "./tipjar";
import Login from "./login";
import Signup from "./signup";
import Window from "./window";
import Table from "./data";
import Upload from "./upload";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// index.js or App.js

const App = () =>{

  const handleLogin = (email) =>{
       console.log('user logged in with mail : ', email );
  }
  const handleSignUp = (email) => {
    console.log('Account Created with mail :', email)
    alert("account created successfully");
  }

  return(
    <>
    <Router>
      <Routes>
       
        <Route exact path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/upgrade" element={<Upgrade/>}/>
        <Route path="/latest_news" element={<Latest_News/>}/>
        <Route path="/coffee" element={<Coffee/>}/>
        <Route path="/tipjar" element={<Tipjar/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
        <Route path="/signup" element={<Signup handleSignUp={handleSignUp}/>}/>
        <Route path="/window" element={<Window/>}/>
        <Route path="/data" element={<Table/>}/>
        <Route path="/upload" element={<Upload/>}/>
        
       
      </Routes>
    </Router>
    </>
  )
}
export default App;