import React from 'react'
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/pinduoduo/Pinduoduo.css"
import pinduoimg from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/pinDuoDuoImg.2c83b723.png"
import pinlogo from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/pinDuoDuoLogo.png"
import Whitelogopin from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/jana-white-logo.png"

function Pinduoduo() {
  return (
    <div className='pinduoduo'>
        <div className='container'>
            <div className='pinduoduo-inner'>
                <div className='pinduoduo-left'>
                <img className='pinduoimg' src={pinduoimg} alt="Pinduoduo Image" />
            </div>
                <div className='pinduoduo-right'> 
                    <img className='pinduologo' src={pinlogo} alt="Pinduoduo Logo" />
                    <img className='whitelogo' src={Whitelogopin}/>
                        <div className='pinduo-text'>
                            <h1 className='pin-item'>Біз Пиндодоның <br></br>ресми серіктесіміз</h1>
                                <div className='pinduoduo-paragraphs'>
                                    <div className='pinduoduo-first-paragraph'>
                                        <h2 className='pin-h2'>3.1 миллион</h2><p className='pintexts'>астам тауар жеткіздік</p>
                                        <h2 className='pin-h2'>30 филиал</h2> <p className='pintexts'> Қазақстан бойынша</p>
                                    </div>
                                    <div className='pinduoduo-second-paragraph'> 
                                        <h2 className='pin-h2'>7+ жылдық</h2> <p className='pintexts'>тасымалдау тәжірибе</p>
                                        <h2 className='pin-h2'>Jana Post</h2>  <p className='pintexts'>Жүйелі қосымша</p></div>
                                    </div>
                                </div>
                        </div>          
                </div>
            </div>
    </div>
  )
}

export default Pinduoduo
