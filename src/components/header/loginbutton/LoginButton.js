import React, { Component }  from 'react';
import "../loginbutton/LoginButton.css"
import loginIcon from "../../../assets/login-icon.svg"

export const LoginButton = () => {
    return (
      <button className='login-button'>
        <img src={loginIcon}/>
        
        <div className="icon">Login</div>
      </button>
    );
  };