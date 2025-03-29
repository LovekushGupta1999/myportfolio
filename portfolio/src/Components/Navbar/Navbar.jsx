import React, {useRef} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
function Navbar() {
    let mobile=useRef()
    let menu=useRef()
    return (
        <nav>
            <h1>PORFOLIO</h1>
            <ul className='desktopmenu'>
               <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}> <li>Home</li></Link>  
               <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}> <li>About</li></Link>  
               <Link to='project' smooth={true} activeClass='active' spy={true} duration={500}> <li>Project</li></Link>
               <Link to='contact' smooth={true} activeClass='active' spy={true} duration={500}> <li>Contact</li></Link>
               <button>DOWNLOAD</button>
            </ul>
            <div className='hamburger' ref={menu} onClick={()=>{
                mobile.current.classList.toggle("activemobile")
                menu.current.classList.toggle("activeham")
            }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className='mobilemenu' ref={mobile}>
               <Link to='home' smooth={true} activeClass='active' spy={true} duration={500}> <li>Home</li></Link>  
               <Link to='about' smooth={true} activeClass='active' spy={true} duration={500}> <li>About</li></Link>  
               <Link to='project' smooth={true} activeClass='active' spy={true} duration={500}> <li>Project</li></Link>
               <Link to='contact' smooth={true} activeClass='active' spy={true} duration={500}> <li>Contact</li></Link>
               <Link to='#' smooth={true} activeClass='active' spy={true} duration={500}> <li>DOWNLOAD</li></Link>
            </ul>
        </nav>
        
    )
}

export default Navbar
