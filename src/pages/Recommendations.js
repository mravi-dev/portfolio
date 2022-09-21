import React from "react";

const Recommendations = () => {
  return (
    <>
      <section className="heading">My Recommendations</section>
      <section className="content">
        <div className="container">
          <div style={{ display: "flex" }}>
            <h4>Name : </h4>
            <p style={{ marginLeft: "133px" }}>Ravi Madheshiya</p>
          </div>

          <div style={{ display: "flex" }}>
            <h4>Title : </h4>
            <p style={{ marginLeft: "146px" }}>Assistant Engineer</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>Recoomendation : </h4>
            <p style={{ marginLeft: "40px" }}>Reccomendation here</p>
          </div>
        </div>
        <div className="container">
          <div style={{ display: "flex" }}>
            <h4>Name : </h4>
            <p style={{ marginLeft: "133px" }}>Bhanu Pratap Singh</p>
          </div>

          <div style={{ display: "flex" }}>
            <h4>Title : </h4>
            <p style={{ marginLeft: "146px" }}>Assistant Engineer</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>Recoomendation : </h4>
            <p style={{ marginLeft: "40px" }}>Reccomendation from bhanu here</p>
          </div>
        </div>
        <div className="container">
          <div style={{ display: "flex" }}>
            <h4>Name : </h4>
            <p style={{ marginLeft: "133px" }}>Ashish Verma</p>
          </div>

          <div style={{ display: "flex" }}>
            <h4>Title : </h4>
            <p style={{ marginLeft: "146px" }}>Assistant Engineer</p>
          </div>
          <div style={{ display: "flex" }}>
            <h4>Recoomendation : </h4>
            <p style={{ marginLeft: "40px" }}>
              Reccomendation from ashish here
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommendations;
