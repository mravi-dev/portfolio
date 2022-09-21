import React from "react";
import { FaEnvelope, FaMobile } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <section className="heading">Contact Me</section>
      <section className="content">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaMobile />
            <h4 style={{ marginLeft: "10px" }}> Mobile : </h4>
            <p style={{ marginLeft: "70px" }}>800492556</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaEnvelope />
            <h4 style={{ marginLeft: "10px" }}> Email : </h4>
            <p style={{ marginLeft: "80px" }}>rvmadheshiya43@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
