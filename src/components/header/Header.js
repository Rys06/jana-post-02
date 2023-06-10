import React from 'react';
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/Header.css";
import Contact from './contact/Contact';
import { LoginButton } from './loginbutton/LoginButton';
import LanguageBut from './languagebut/LanguageButton';
import Janalogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/janapost-logo.svg";

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <div className='fixed-top'>
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
