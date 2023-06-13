import React, { useState } from 'react';
import "../languagebut/LanguageButton.css"
import Arrowimg from "../../../assets/arrowimg.svg"
import LangKz from "../../../assets/kz.svg"

const LanguageBut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-button" onClick={toggleDropdown}>
      <img src={LangKz} className='lang-style'/>
      <button className='language-button-inner'>Қазақша</button>
      <img src={Arrowimg}/>
      {isOpen && (
        <ul className="language-dropdown">
          <li className='li-hover'>Қазақша</li>
          <li className='li-hover'>Русский</li>
          <li className='li-hover'>English</li>
          <li className='li-hover'>简体中文</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageBut;
