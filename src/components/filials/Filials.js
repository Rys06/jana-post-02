import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../filials/Filials.css"
import Phone from "../../assets/phone_android.svg"
import Time from "../../assets/watch_inactive.svg"
import Money from "../../assets/payments.svg"
import LocationLogo from "../../assets/location_on.svg"
import Tgis from "../../assets/2gislogo.svg"
import Yandex from "../../assets/yandexlogo.svg"

const Filials = () => {

  const locations = [
    {
      city: 'Ақтөбе облысы',
      phone: '+77072651688',
      watch: '09:00 - 17:00 Сейсенбі демалыс',
      money: 'Қытайдан филиалдарға дейін',
      address: 'Жанаконыс 394 а Ақтөбе қаласы',
      maps: ['2gis', 'Яндек.Карты']
    },
    {
      city: 'Астана қаласы',
      phone: '+77475991688',
      watch: '09:00 - 17:00 Сейсенбі демалыс',
      money: 'Қытайдан филиалдарға дейін',
      address: 'Шоссе Алаш 35/3 Байқоңыр ауданы',
      maps: ['2gis', 'Яндек.Карты']
    },
    {
      city: 'Атырау облысы',
      phone: '+77479091688',
      watch: '09:00 - 17:00 Сейсенбі демалыс',
      money: 'Қытайдан филиалдарға дейін',
      address: 'Баймуханова 78 Атырау қаласы',
      maps: ['2gis', 'Яндек.Карты']
    },
    {
      city: 'Маңғыстау облысы',
      phone: '+77075421688',
      watch: '09:00 - 17:00 Сейсенбі демалыс',
      money: 'Қытайдан филиалдарға дейін ',
      address: '28 а, 23 Ақтау қаласы',
      maps: ['2gis', 'Яндек.Карты']
    }
    
  ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className='filial'>
          <div className="container">
          <h1 className='filial-title'>Біздің Қазақстан бойынша филиалдар</h1>
              <div className='filial-inner'>
                 <Slider {...settings}>
                    {locations.map((location, index) => (
                        <div className='slider-outter'>
                            <div key={index} className="slider-slide">
                                <h3 className='slider-title'>{location.city}</h3>
                                <p className='slider-text'><img className='slider-img' src={Phone}/> {location.phone}</p><br></br>
                                <p className='slider-text'><img className='slider-img' src={Time} /> {location.watch}</p><br></br>
                                <p  className='slider-text'><img className='slider-img' src={Money} />{location.money} <br></br>- Standart 4.7$ / 1кг </p><br></br>
                                <p className="slider-text"><img className='slider-img' src={LocationLogo}/>{location.address}</p><br></br>
                                <div className="">
                                    <button className="tgis-button">
                                        <div className="button-content">
                                            <img className='button-img' src={Tgis} alt="2gis" />
                                            <span className="map-text">{location.maps[0]}</span>
                                        </div>
                                    </button>
                                    <button className="yandex-button">
                                        <div className="button-content">
                                            <img className='' src={Yandex} alt="yandex" />
                                            <span className="map-text">{location.maps[1]}</span>
                                        </div>
                                    </button>
                                </div>

                            </div>   
                        </div>
                      ))}
                  </Slider>
                  <button className='all-filials'>Барлық филиалды көру</button>
              </div>
          </div>
    </div>
  );
  };
  

  export default Filials