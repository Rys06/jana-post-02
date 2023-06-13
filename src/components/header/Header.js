import React from 'react';
import "../header/Header.css";
import "../../../src/App.css"
import Contact from './contact/Contact';
import { LoginButton } from './loginbutton/LoginButton';
import LanguageBut from './languagebut/LanguageButton';
import Janalogo from "../../assets/janapost-logo.svg"

function Header() {
  return (
  
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <div className='header-inner-nav'>
            <img className='jana-logo' src={Janalogo} alt="JanaPost Logo" />
            <div className="header-right">
              <Contact />
              <LoginButton />
              <LanguageBut />
            </div>
          </div>
            
        </div>
      </div>
    </header>
  );
}

export default Header;
