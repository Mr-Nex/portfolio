import React from 'react'
import Typed from 'react-typed';
import resume from "../asset/Nitin's Resume.pdf";

const Header = () => {
    return (
        <div className="header-wrapper">

            <div className="main-info">
                <h1>Software Engineer</h1>

                <Typed
                    className="typed-text"
                    strings={["DSA", "Java", "Problem Solving", "Spring Boot", "Spring MVC","Rest API","SQL","Linux","NoSQL","Competitive Programming"]}
                    typeSpeed = {40}
                    backSpeed = {60}
                    loop
                />
                <div className="btn-main">
                <a href={resume} className="btn-main-offer" target="_blank">View Resume</a>
                <a href={resume} className="btn-main-offer" download>Download Resume</a>
                </div>
            </div>
            
        </div>
    )
}

export default Header
