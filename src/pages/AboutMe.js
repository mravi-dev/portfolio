import { FaUser } from "react-icons/fa";
import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <>
      <section className="heading">About Me</section>
      <section className="content">
        <div className="profile">
          <div className="profileLeft">
            Hello, My Name is Ravi Madheshiya.
            <br /> I'm a web and software developer of UPPCL, Lucknow.
          </div>
          <div className="profileRight">
            <FaUser size={180} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
