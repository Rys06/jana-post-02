import React from 'react'
import Applelogo from "../../assets/apple.logo.svg"
import Googleplaylogo from "../../assets/google-play.logo.svg"
import Qrcode from "../../assets/jp_code.png"
import Bluedevice from "../../assets/footerDevice1.png"
import Greendevice from "../../assets/traceCodeDevice2.png"
import "../jana-app/JanaApp.css"

function JanaApp() {
  return (
    <div className='jana-app'>
        <div className='container'>
            <div className='jana-app-inner'>
                <div className='jana-app-text'>
                    <h1 className='jana-app-title'>Тауарларыңыз әрқашан қол астыңызда</h1>
                    <p className='jana-app-subtitle'>Оңай. Тез. Тиімді.</p>
                    <div className='jana-app-platform'>
                        <div className='jana-app-platform-item'>
                            <img src={Applelogo}/>
                            <div className='jana-app-platform-text'>
                                <span className='platform-text-title'>App Store</span><br></br>
                                <span className='platform-text-subtitle'>Қолжетімді</span>
                            </div>
                        </div>
                        <div className='jana-app-platform-item'>
                            <img src={Googleplaylogo}/>
                            <div className='jana-app-platform-text'>
                                <span className='platform-text-title'>Google Play</span><br></br>
                                <span className='platform-text-subtitle'>Жүктеп алу</span>
                            </div>
                        </div>
                    </div>
                    <div className='jana-app-qr'>
                        <img src={Qrcode} width={80}/>
                        <div className='jana-app-qr-text'>JAŃA POST веб-сайттың мазмұнына жылдам қол жеткізу үшін QR кодын сканерлеңіз.</div>
                    </div>
                </div>
                <div className='Jana-app-phone'>
                    <img src={Bluedevice} width={284} className='blue-device'/>
                    <img src={Greendevice} width={284} className='green-device'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JanaApp
