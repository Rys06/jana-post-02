import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../tracking/TrackingButton.css" 
import JanaWhitelogo from "../../assets/jana-white-logo.png"
import ProductTracking from "../../assets/product-tracking.svg"
import AddCodeProduct from "../../assets/add-track-code.svg"

function TrackingButton() {
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Active(true);
      setButton2Active(false);
    } else if (buttonNumber === 2) {
      setButton1Active(false);
      setButton2Active(true);
      
    }
  };

  return (
    <div className='tracking-button'>
        <div className='container'>
            <div className='tracking-inner'>
                <div className='bgimage'>
                    <div className='welcome-land'>
                        <img className='white-logo' src={JanaWhitelogo} />
                        <h1 className='welcome-text'>Қытайдан онлайн сатып ал <br></br> да, Қазақстанға жеткіз! </h1>
                    </div>
                    <div className='button-container'>
                        <div className={`tracking ${button1Active ? 'btn-primary' : 'btn-light'}`}onClick={() => handleButtonClick(1)}>
                            <img className='track-img' src={ProductTracking} />
                            <span className='tracking-text'>Тауарды қадағалау</span> 
                        </div>

                        <div className={`tracking ${button2Active ? 'btn-primary' : 'btn-light'}`}onClick={() => handleButtonClick(2)}>
                            <img className='track-img' src={AddCodeProduct} />
                            <span className='tracking-text'>Трек код қосу</span> 
                        </div>
                    </div>
                        <div className='tracking'>
                            {button1Active && (
                                <div class="observation-input">
                                    <div class="input-block">
                                        <label for="observation" class="label">Өз тауарыңызды қадағалаңыз</label>
                                        <input placeholder="Трек кодты енгізіңіз" class="input" type="text" id="observation"></input>
                                    </div>
                                    <button class="observation-btn">Қадағалау</button>
                                </div>
                            )}
                            {button2Active && (
                            <div className="tracking-content">
                                <div class="observation-input">
                                    <div class="input-block">
                                        <label for="observation" class="label">Трек код қосу</label>
                                        <input placeholder="Трек кодты енгізіңіз" class="input" type="text" id="observation"></input>
                                    </div>
                                    <button class="observation-btn">Қосу</button>
                                </div>
                            </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
  </div>  

  );
}

export default TrackingButton;
