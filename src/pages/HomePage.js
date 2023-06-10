import React, { Component }  from 'react';
import Header from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/header/Header.js"
import TrackingButton from '/Users/kondybairysbek/Desktop/jana-post-02/src/components/tracking/TrackingButton.js';
import TarifConvertComponent from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/tarif/Tarif.js"
import Filials from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/filials/Filials.js";
import Pinduoduo from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/pinduoduo/Pinduoduo.js"
import Team from '/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-team/JanaTeam.js';
import JanaApp from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-app/JanaApp.js"
import Footer from "/Users/kondybairysbek/Desktop/jana-post-02/src/components/footer/Footer.js"

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