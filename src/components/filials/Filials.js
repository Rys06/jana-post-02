import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { Link } from 'react-scroll';
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/filials/Filials.css";
import Tgis from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/2gislogo.svg"
import Yandex from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/yandexlogo.svg"

const locations = [
  {
    city: 'Ақтөбе облысы',
    phone: '+77072651688',
    watch: '09:00 - 17:00 Сейсенбі демалыс',
    money: 'Қытайдан филиалдарға дейін / 1кг',
    address: 'Жанаконыс 394 а Ақтөбе қаласы',
    maps: ['2gis', 'yandex']
  },
  {
    city: 'Астана қаласы',
    phone: '+77475991688',
    watch: '09:00 - 17:00 Сейсенбі демалыс',
    money: 'Қытайдан филиалдарға дейін / 1кг',
    address: 'Шоссе Алаш 35/3 Байқоңыр ауданы',
    maps: ['2gis', 'yandex']
  },
  {
    city: 'Атырау облысы',
    phone: '+77479091688',
    watch: '09:00 - 17:00 Сейсенбі демалыс',
    money: 'Қытайдан филиалдарға дейін / 1кг',
    address: 'Баймуханова 78 Атырау қаласы',
    maps: ['2gis', 'yandex']
  },
  {
    city: 'Маңғыстау облысы',
    phone: '+77075421688',
    watch: '09:00 - 17:00 Сейсенбі демалыс',
    money: 'Қытайдан филиалдарға дейін / 1кг',
    address: '28 а, 23 Ақтау қаласы',
    maps: ['2gis', 'yandex']
  },
  {
    city: 'Маңғыстау облысы',
    phone: '++77073091688',
    watch: '09:00 - 17:00 Сейсенбі демалыс',
    money: 'Қытайдан филиалдарға дейін / 1кг',
    address: 'Рахат 2-4-39 Жаңаөзен қаласы',
    maps: ['2gis', 'yandex']
  }
  
];

const componentsPerWindow = 3;
const scrollDuration = 1000; // Adjust the scroll duration as needed
const scrollInterval = 5000; 



function Filial() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  const [visibleComponents, setVisibleComponents] = useState([]);


useEffect(() => {
    const initialVisibleComponents = locations.slice(0, componentsPerWindow);
    setVisibleComponents(initialVisibleComponents);

    const scrollNext = () => {
      setVisibleComponents((prevVisibleComponents) => {
        const nextIndex = (prevVisibleComponents.length + componentsPerWindow) % locations.length;
        return locations.slice(nextIndex, nextIndex + componentsPerWindow);
      });
    };

    const scrollIntervalId = setInterval(() => {
      scrollNext();
      scrollToNext();
    }, scrollInterval);

    const scrollToNext = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const nextElementIndex = (visibleComponents.length - 1 + componentsPerWindow) % locations.length;
      const elementId = `location-${nextElementIndex}`;

      scroller.scrollTo(elementId, {
        duration: scrollDuration,
        smooth: true,
        offset: -50,
        containerId: 'filials-container', // Add a container ID if needed
        isDynamic: true,
        spy: true,
      });

      // Scroll to the top if reaching the end of the list
      if (nextElementIndex === locations.length - 1) {
        scroll.scrollToTop({
          duration: scrollDuration,
          smooth: true,
        });
      }
    };

    return () => {
      clearInterval(scrollIntervalId);
    };
  }, []);



  const handleMapClick = (map) => {
    if (map === '2gis') {
      window.open('https://maps.2gis.com', '_blank');
    } else if (map === 'yandex') {
      window.open('https://yandex.maps.com', '_blank');
    }
  };

  return (

    <div className='filials'>
          <Element name="filials" className="filials">
        <div className='container'>
            <h1 className="filials-title">Біздің Қазақстан бойынша филиалдар</h1>
                <div className='filials-inner'>
                {visibleComponents.map((location, index) => (
                        <Link key={index} to="filials" smooth={true} duration={500}>
                          <div key={index} className="location-container">
                            <h2 className="location">{location.city}</h2>
                            <p className="location">Phone: {location.phone}</p>
                            <p className="location">Watch: {location.watch}</p>
                            <p className="location">{location.money}<br></br> - Standart 4.7$</p>
                            <p className="location">{location.price}</p>
                            <p className="location">Location: {location.address}</p>
                                <div className="location">
                                {location.maps.map((map, mapIndex) => (
                                        <button key={mapIndex} className="location-map" onClick={() => handleMapClick(map)}>
                                            {map === '2gis' && <img src={Tgis} alt="2gis" />}
                                            {map === 'yandex' && <img src={Yandex} alt="yandex" />}
                                            <span className="map-text">{map}</span>
                                        </button>
                                    ))}
                                </div>
                        </div>
                        </Link>
                    ))}
                </div>
              <button className='all-filials-button' onClick={scrollToTop}>Барлық филиалды көру</button>
        </div>
        </Element>
    </div>
  );

}

export default Filial;
