import React from 'react'
import './Project.css'
import Card from '../Card/Card.jsx'


function Project() {
    return (
        <div className="project">
            <h1>PROJECTS</h1>
            <div className='projectcard'><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/></div>
        </div>
    )
}

export default Project
