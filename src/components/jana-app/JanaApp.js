import React from 'react'
import Applelogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/apple.logo.svg"
import Googleplaylogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/google-play.logo.svg"
import Qrcode from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/jp_code.png"
import Bluedevice from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/footerDevice1.png"
import Greendevice from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/traceCodeDevice2.png"
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-app/JanaApp.css"

function JanaApp() {
  return (
    <div className='jana-app'>
        <div className='container'>
            <div className='jana-app-inner'>
                <div className='left-app'>
                        <div className='app-title'>
                            <h1 className='1app-item'>Тауарларыңыз<br></br> әрқашан қол<br></br> астыңызда</h1>
                            <h2 className='2app-item'>Оңай. Тез. Тиімді.</h2>
                        </div>
                            <div className='platforms'>
                                <div className='platform-item'>
                                        <img className='app-logo' src={Applelogo}></img>
                                        <div className='app-text'>
                                            <h6 className='app-text-title'>App Store</h6>
                                            <p className='app-text-paragraph'>Qoljetimdi</p>
                                        </div>
                                    </div>
                                <div className='platform-item'>
                                    <img className='app-logo' src={Googleplaylogo}></img>
                                    <div className='app-text'>
                                        <h6 className='app-text-title'>Google Play</h6>
                                        <p className='app-text-paragraph'>Juktep aly</p>
                                    </div>
                                </div>
                            </div>
                        <div className='qr-app-container'>
                            <img className='qr-code-img' src={Qrcode} />
                            <p className='qr-code-text'>JAŃA POST веб-сайттың<br></br> мазмұнына жылдам қол<br></br> жеткізу үшін QR кодын<br></br> сканерлеңіз.</p>
                        </div>
                </div>
                <div className='right-app'>
                    <div className='left-img-container'>
                        <img className='left-app-img' src={Bluedevice} />
                    </div> 
                    <div className='right-img-container'>   
                        <img className='right-app-img' src={Greendevice} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JanaApp
