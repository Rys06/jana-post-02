import React, { Component }  from 'react';
import Header from "../components/header/Header.js"
import TrackingButton from '../components/tracking/TrackingButton.js';
import TarifConvertComponent from "../components/tarif/Tarif.js"
import Filials from "../components/filials/Filials.js";
import Pinduoduo from "../components/pinduoduo/Pinduoduo.js"
import Team from '../components/jana-team/JanaTeam.js';
import JanaApp from "../components/jana-app/JanaApp.js"
import Footer from "../components/footer/Footer.js"



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