import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about'>
            <div className="leftabout">
              <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
              </div>
              <div className="aboutdetails">
                <div className="personaldetails">
                    <h1>PERSONAL INFO</h1>
                    <ul>
                        <li><span>NAME</span> : LOVEKUSH GUPTA</li>
                        <li><span>AGE</span> : 25</li>
                        <li><span>GENDER</span> : MALE</li>
                        <li><span>LANGUAGE</span> : HINDI, ENGLISH</li>
                    </ul>
                </div>
                <div className="Educationdetails">
                    <h1>EDUCATION</h1>
                    <ul>
                        <li><span>DEGREE</span> : MASTER OF SCIENCE</li>
                        <li><span>BRANCH</span> : COMPUTER SCIENCE</li>
                        <li><span>CGPA</span> : 8.0</li>
                    </ul>
                </div>
                <div className="skilldetails">
                    <h1>SKILLS</h1>
                    <ul>
                        <li><span>FRONTEND</span> : HTML, CSS, JAVASCRIPT</li>
                        <li><span>BACKEND</span> : PYTHON, DJANGO</li>
                        <li><span>LANGUAGE</span>: C, C++, PYTHON, JAVA</li>
                        <li><span>TECHNOLOGIES & FRAMEWORK</span> : GITHUB, GIT, REACT JS, REDUX</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="rightabout">

            </div>
        </div>
    )
}

export default About
