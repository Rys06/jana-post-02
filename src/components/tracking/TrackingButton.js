import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/tracking/TrackingButton.css"
import Bgimage from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/bg-first-page.jpg"
import JanaWhitelogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/jana-white-logo.png"

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
                        <h1 className='welcome-text'>Қытайдан онлайн сатып ал </h1>
                        <h1 className='welcome-text'>да, Қазақстанға жеткіз!</h1>
                    </div>
                    <div className='button-container'>
                        <button id='bg-tracking' className={`tracking ${button1Active ? 'btn btn-primary btn-lg' : 'btn btn-light btn-lg'}`}onClick={() => handleButtonClick(1)}>
                            Тауарды қадағалау
                            </button>
                        <button id='bg-tracking'  className={`tracking ${button2Active ? 'btn btn-primary btn-lg' : 'btn btn-light btn-lg'}`}onClick={() => handleButtonClick(2)}>
                            Трек код қосу
                            </button>
                    </div>
                        <div className='tracking'>
                            {button1Active && (
                            <div className="tracking-content">
                                <div className="placeholder-container">
                                    <div className="placeholder-content">
                                        <p>Трек код қосу</p>
                                        <p>Трек кодты енгізіңіз</p>
                                    </div>
                                    <button className="btn btn-success">Qadagalau</button>
                                </div>
                            </div>
                            )}
                            {button2Active && (
                            <div className="tracking-content">
                                <div className="placeholder-container">
                                    <div className="placeholder-content">
                                        <p>Өз тауарыңызды қадағалаңыз</p>
                                        <p>Трек кодты енгізіңіз</p>
                                    </div>
                                    <button className="btn btn-success">Qosu</button>
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
