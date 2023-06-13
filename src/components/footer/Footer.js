import React from 'react'
import "../footer/Footer.css"
import JanaPostLogo from "../../assets/janapost-logo.svg"
import AndroidPhone from "../../assets/phone_android.svg"
import WhatsAppLogo from "../../assets/whatsapp.Logo.svg"
import MailLogo from "../../assets/mail.logo.svg"
import LocationLogo from "../../assets/location_on.logo.svg"
import TwoGisLogo from "../../assets/2gislogo.svg"
import YandexLogo from "../../assets/yandexlogo.svg"
import Applelogo from "../../assets/apple.logo.svg"
import Googleplaylogo from "../../assets/google-play.logo.svg"
import "../jana-app/JanaApp.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-inner'>
            <div className='left-footer'>
                <img src={JanaPostLogo} className='footer-logo'/>
                <div className='contact'>
                    <div className='footer-img'>
                        <img src={AndroidPhone}/>
                    </div>
                    <div className='contact-text text'>
                        <span className='contact-text-number'>+7 727 349 97 40</span>
                        <div className='contact-text-whatsapp'>
                            <img src={WhatsAppLogo}/>
                            <span className='contact-text-whatsapp-link'>WhatsApp-қа жазу</span>
                        </div>
                    </div>
                </div>
                <div className='mail'>
                    <div className='footer-img'>
                        <img src={MailLogo}/>
                    </div>
                    <span className='mail-text'>request@janapost.kz</span>
                </div>
                <div className='location'>
                    <div className='footer-img'>
                        <img src={LocationLogo}/>
                    </div>
                    <div className='location-text'>
                        <span className='location-text-title'>Қалқаман-2 шағын ауданы, Қарақулова көш.,40 үй, 4 этаж. 050006</span>
                        <div className='location-text-city'>Алматы, Казахстан</div>
                        <div className='location-text-maps'>
                            <div className='maps'>
                                <img src={TwoGisLogo}/>
                                <span className='maps-text'>2gis</span>
                            </div>
                            <div className='maps'>
                                <img src={YandexLogo}/>
                                <span className='maps-text'>Яндек.Карты</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-footer'>
                <div className='footer-info'>
                    <ul className='footer-list'>
                        <li>Басты бет</li>
                        <li>Қолданушы келісім шарты</li>
                        <li>Тарифтер</li>
                    </ul>
                    <ul className='footer-list'>
                        <li>Мобильді қосымша</li>
                        <li>Тыйым салынған заттар</li>
                        <li>Оферта</li>
                    </ul>
                </div>
                <div className='platforms'>
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
                    <p className='coorporation'>© 2021-2023 JAŃA POST. БИН 211040033696. Барлық құқық қорғалған</p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
