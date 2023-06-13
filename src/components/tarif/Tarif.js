import React from 'react'
import "../tarif/Tarif.css"
import Progressbar from "./Progressbar"

function TarifConvertComponent() {

  return (
    <div className='tarif'>
        <div className='container'>
            <div className='tarif-inner'>
                <div className='tarif-text-container'>
                    <h1 className='tarif-text'>Бізде ең тиімді<br></br> тарифтер.</h1>
                </div>
                <div>
                    <Progressbar />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TarifConvertComponent
