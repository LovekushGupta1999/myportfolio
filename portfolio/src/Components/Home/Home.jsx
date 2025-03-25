import React from 'react'
import './Home.css'
import TypingEffect from 'react-typed.ts'
import man from '../../assets/images/lovekush.png'

function Home() {
    return (
        <div className='home'>
            <div className='lefthome'>
                <div className="homedetails">
                    <div className="line1">I'M</div>
                    <div className="line2">Lovekush Gupta</div>
                    <div className="line3">
                        <TypingEffect
                        strings={["WEB DEVELOPER","SOFTWARE DEVELOPER"]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop={true}
                        cursor='|'
                        /> 
                    </div>
                    <button >HIRE ME </button>
                    <div className="circlediv">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                   </div>
                </div>
            </div>
            <div className='righthome'>
                <div className='imgsection'>
                <img src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
