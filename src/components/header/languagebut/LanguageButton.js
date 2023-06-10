import React, { useState } from 'react';
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/languagebut/LanguageButton.css"
import Arrowimg from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/arrowimg.svg"

const LanguageBut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-button" onClick={toggleDropdown}>
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
