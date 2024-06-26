import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./Login.css"
import { useState } from 'react';
import RegistrationForm from '../Registration/Registration.js';
import axios from 'axios';
import Header from "../Header/Header.js";
import Model1 from "../3DModels/Model1.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faSquareXTwitter,faFacebookF,faSquareInstagram,faUpwork} from '@fortawesome/free-brands-svg-icons';




export default function Login({setView}){

    const [usernameText, setusernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [userRole, setUserRole]= useState("")
    const [registerClicked,setRegisterClicked]=useState(0)

function loginClick() {
  setView("Room")
  // axios.post("http://localhost:8080/login", {
  //   username: usernameText,
  //   password: passwordText
  // })
  // .then((response) => {
  //   console.log(response); // Log the response 
  //   setUserRole(response.data.role); // Set the user role
  // })
  // .catch(error => console.log(error));
}


function usernameChange (eventText) {
  setusernameText(eventText);
}

function passwordChange (eventText) {
  setPasswordText(eventText);
}




return(<div className="App">
  
      <div id="FadeOutEffect"></div>
     <Header  registerClicked={registerClicked} setRegisterClicked={setRegisterClicked} />
     <div    
          className="Login-Form_Wrapper">
            
  
    <div 
          className="Login-Img">
     
     <Model1/>
          </div>

    {!registerClicked?  <div className="Login-Form">
          <input
          id='Login-UserName'
          type= "text"
          placeholder={"Username"}
          onChange={(e)=>usernameChange(e.target.value)}/>
          <input 
          id='Login-PassWord'
          type= "password"
          placeholder={"Password"}
          onChange={(e)=>passwordChange(e.target.value)}/>
        
          <button  
          onClick={loginClick}>Login</button>
          <span style={{color:"white"}}>Don't have an account yet?<p className='Link' onClick={()=>setRegisterClicked(!registerClicked)}>Sign up</p>
          </span>
        </div>:  <div className='Login-Registration-Wrapper'><RegistrationForm registerClicked={registerClicked} setRegisterClicked={setRegisterClicked} /></div>}
     </div>
     <div className="Login-Footer">
     <FontAwesomeIcon className="LinkedinIcon" icon={faLinkedin} />
     <FontAwesomeIcon icon={faUpwork} className="LinkedinIcon" />
     <FontAwesomeIcon icon={faSquareXTwitter} className="LinkedinIcon" />
     <FontAwesomeIcon icon={faSquareInstagram}  className="LinkedinIcon" />
     <FontAwesomeIcon icon={faFacebookF} className="LinkedinIcon"  />
          </div>

</div>)


}