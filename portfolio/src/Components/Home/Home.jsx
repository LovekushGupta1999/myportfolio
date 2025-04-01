import React from 'react'
import './Home.css'
import TypingEffect from 'react-typed.ts'
import man from '../../assets/images/lovepng.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                    <div className="circle"><LinkedInIcon/></div>
                    <div className="circle"><InstagramIcon/></div>
                    <div className="circle"><GitHubIcon/> </div>
                    
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
