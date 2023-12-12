import React, { useState } from "react";
import './login.css';


const LoginSign =() =>{
  const [action,setAction]=useState("Login");
    return (
        <div className='container'>
           <div className='header'>
           <div className='text'> 
          {action}
        </div>
       
        
          </div>
          <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
           
           <input type="text"  placeholder="person Name" />
         
        
         </div>}
          
          <div className='input'>
           
            <input type="email"   placeholder="person Email"/>
          
         
          </div>
          <div className='input'>
           
            <input type="password"  placeholder="Person Password"/>
          
         
          </div>
          <div className="sumit_container">
            <div className={action=== "Sign Up"? "Sumit" : "Sumit gray"}  onClick={()=>{setAction("Sign Up")}}>
              Sign Up

            </div>
            <div className={action=== "Login"? "Sumit" : "Sumit gray"} onClick={()=>{setAction("Login")}}>
             Login

            </div>

          </div>
          </div>
        </div>

    );
}
export default LoginSign;