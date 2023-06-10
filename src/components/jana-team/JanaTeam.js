import React from 'react'
import "/Users/kondybairysbek/Desktop/jana-post-02/src/components/jana-team/JanaTeam.css"
import Teamimg from "/Users/kondybairysbek/Desktop/jana-post-02/src/assets/teamimg.png"

function Team() {
  return (
    <div className="jana-team">
        <div className='container'>
            <div className='jana-team-inner'>
                <div className="left-box">
                    <h1>JAŃA POST командасы</h1>
                    <p>Бізбен жұмыс жасаған сенімді және ыңғайлы. Қолданушыларға ыңғайлы болу <br></br> үшін, біз қытайша,
                        орысша, қазақша, ағылшынша және т.b. тілдерде қызмет<br></br> көрсетеміз.</p>
                    <p>Біз ең күрделі мәселелерді шешеміз және кез-келген қиындыққа әрқашан<br></br> дайынбыз. JAŃA POST клиенті
                        болыңыз және сізге басқа тасымалдаушыны<br></br> іздеудің қажеті жоқ.</p>
                    <img className='teamimg' src={Teamimg}/>
                </div>
                <div className="right-box">
                    <h2>JAŃA POST<br></br> тасымалдауды <br></br>қалай жеңілдетеді</h2>
                
                        <p>Тіркеліп аккаунтты іске қосыңыз</p>
                        <p>Интернеттен тауар сатып алыңыз<br></br> және жеткізу мекенжайларын <br></br>пайдаланыңыз</p>
                        <p>Жеткізу ақысын ыңғайлы және<br></br> жылдам төлеңіз</p>
                
                    <button className='btn btn-success'>Tirkely</button>
                </div>
            </div>
        </div>
  </div>
  
  )
}

export default Team
