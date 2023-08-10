import React, { useState } from "react";
import mailIcon from "../../images/mail.png";
import liIcon from "../../images/in.png";
import FaceBook from "../../images/Facebook.png";
import Github from "../../images/GitHub.png";
import Twitter from "../../images/Twitter.png";
import Linkedin from "../../images/Linkedin.png";
import Instagram from "../../images/Instagram.png";
import "./Card.scss";
import avatar from "../../images/avatar.png";

function Card() {
  const [links, setLinks] = useState(true);
  const [theme, setTheme] = useState(true);
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };

  const toggleLinks = () => {
    setLinks((prev) => !prev);
  };

  return (
    <div className={`cardBody ${theme ? "theme-black" : "theme-light"}`}>
      <div className="cardContent">
        <div className="buttonsContainer">
          {!modal && <button onClick={toggleModal}>toggleModal</button>}
        </div>
        {modal && (
          <div className="modalWindow">
            <button className="closeButton" onClick={toggleModal}>
              &#10006;
            </button>
            <button onClick={changeTheme}>changeTheme</button>
            <button onClick={toggleLinks}>toggleLinks</button>
          </div>
        )}
        <div className="Imgs">
          <img src={avatar} alt="" />
        </div>
        <div className="cardInformation">
          <div className="personInfo">Laura Smith</div>
          <div className="jobInfo">Frontend Developer</div>
          <div className="mailInfo">laurasmith.website</div>
        </div>
        <div className="cardButtons">
          <button className="buttonEmail">
            <img src={mailIcon} alt="mailIcon" />
            Email
          </button>
          <div className="buttonContainer">
            {links && (
              <button className="buttonLink">
                <img src={liIcon} alt="LiIcon" />
                LinkedIn
              </button>
            )}
          </div>
        </div>
        <div className="CardSectionText">
          <div className="CardSectionAbout">
            <h1>About</h1>
            <p>
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="CardSectionInterests">
            <h1>Interests</h1>
            <p>
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        {links && (
          <div className="CardSectionLinks">
            <div className="Links">
              <img src={FaceBook} alt="facebook" />
              <img src={Github} alt="github" />
              <img src={Twitter} alt="twitter" />
              <img src={Linkedin} alt="linkedin" />
              <img src={Instagram} alt="instagram" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
