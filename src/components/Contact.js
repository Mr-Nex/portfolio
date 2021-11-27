import React from 'react'
import "./Contact.css";
import Email from "../email.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context";

const Contact = () => {
//   const formRef = useRef();
//   const [done, setDone] = useState(false)
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_rrvnzco",
//         "template_3v5nih4",
//         formRef.current,
//         "user_DrriDPTGKO2Zj4RDXCA6W"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <>
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Send me a mail...</h1>
          <div className="c-info">
            
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              nitink386@gmail.com
            </div>
            
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Liked my profile?</b> Get in touch. Always available for
            better, more challenging opportunities.
          </p>
          <form>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button><a href="mailto:nitink386@gmail.com?subject=Saw Your Portfolio">Send</a></button>         
          </form>
        </div>
      </div>
    </div>
    <a className="salutation" href="#">Designed By - Nitin Kumar</a>
      </>
  );
};

export default Contact
