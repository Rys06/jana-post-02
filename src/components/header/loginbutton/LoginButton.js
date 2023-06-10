import React, { Component }  from 'react';
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/loginbutton/LoginButton.css"
import loginIcon from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/login-icon.svg"

export const LoginButton = () => {
    return (
      <button className='login-button'>
        <img src={loginIcon}/>
        
        <div className="icon">Login</div>
      </button>
    );
  };