import React, { Component }  from 'react';
import Header from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/Header.js"
import TrackingButton from '/Users/kondybairysbek/Desktop/jana-post-02/src/components/tracking/TrackingButton.js';
import TarifConvertComponent from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/tarif/Tarif.js"
import Filials from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/filials/Filials.js";
import Pinduoduo from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/pinduoduo/Pinduoduo.js"
import Team from '/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-team/JanaTeam.js';
import JanaApp from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-app/JanaApp.js"
import Footer from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/footer/Footer.js"

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
  


function HomePage () 
{
    return  (
        <div> 
            <Header />
            <TrackingButton />      
            <TarifConvertComponent />
            <Filials />
            <Pinduoduo />
            <Team />
            <JanaApp />
            <Footer />
        </div>
    )
}

 export default HomePage 