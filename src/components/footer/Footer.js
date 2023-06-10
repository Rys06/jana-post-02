import React from 'react'
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/footer/Footer.css"
import JanaPostLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/janapost-logo.svg"
import AndroidPhone from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/phone_android.svg"
import WhatsAppLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/whatsapp.Logo.svg"
import MailLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/mail.logo.svg"
import LocationLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/location_on.logo.svg"
import TwoGisLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/2gislogo.svg"
import YandexLogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/yandexlogo.svg"
import Applelogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/apple.logo.svg"
import Googleplaylogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/google-play.logo.svg"

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-inner'>
            <div className='left-footer'>
                <img className='footer-jana-post-logo' src={JanaPostLogo} />
                <div className='footer-navbar'>
                    <img className='android-phone-logo' src={AndroidPhone} />
                    <p>+7 727 349 97 40</p>
                    </div>
                <div className='whatsapp-button'>
                    <img className='whatsapp-logo' src={WhatsAppLogo}/><p>WhatsApp-қа жазу</p>
                    </div>
                <div className='footer-navbar'>
                    <img className='mail-logo' src={MailLogo}/>
                    <a href=''>request@janapost.kz</a>
                </div>
                <div className='footer-navbar'>
                    <img className='location-logo' src={LocationLogo}/>
                        <p className='location-text'>Қалқаман-2 шағын ауданы, Қарақулова көш.,<br></br>
                        40 үй, 4 этаж. 050006
                   <br></br>
                        Алматы, Казахстан</p>
                </div>
                <div>
                    <button className='location-map'><img src={TwoGisLogo}/>2gis</button>
                    <button className='location-map'><img src={YandexLogo}/>Yandex</button>
                </div>
            </div>
            <div className='right-footer'>
                <div className='footer-info'>
                    <ul className='footer-list'>
                        <li>Басты бет</li>
                        <li>Қолданушы келісім шарты</li>
                        <li>Тарифтер</li>
                    </ul>
                    <ul>
                        <li>Мобильді қосымша</li>
                        <li>Тыйым салынған заттар</li>
                        <li>Оферта</li>
                    </ul>
                </div>
                <div className='platforms'>
                    <div className='platform-item'>
                        <img src={Applelogo} />
                        <div className='app-text'>
                            <h6 className='app-text-title'>App Store</h6>
                            <p className='app-text-paragraph'>Qoljetimdi</p>
                        </div>
                    </div>
                    <div className='platform-item'>
                        <img src={Googleplaylogo} />
                        <div className='app-text'>
                            <h6 className='app-text-title'>Google Play</h6>
                            <p className='app-text-paragraph'>Juktep aly</p>
                        </div>
                    </div>
                </div>
                <p>© 2021-2023 JAŃA POST. БИН 211040033696. Барлық құқық қорғалған</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
