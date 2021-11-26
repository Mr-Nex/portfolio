import React from 'react'
import "./About.css";
import Award from "../award.png";
import me from "../dp.jpg"

const About = () => {
    return (
        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I'm a Computer Science Engineer with more than 2.5 years of industrial experience.
        </p>
        <p className="a-desc">        
        
        Have experience in developing robust business level
        code, design and development of back-end systems, micro-services, rest APIs in Spring framework, have created Spring MVC/Boot projects.
        Also have experience in design and development of Mobile Apps and Websites from scratch.       
        I'm an enthusiastic competitive programmer and spend my free time solving complex problems using DSA.
        Currently working as a Software Development Engineer.
    
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">TCS Spot Awards (2019 and 2020)</h4>
            <p className="a-award-desc">
              I got 2 Spot Awards in two consecutive quarters for my out of the box thinking and intuitive solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About
