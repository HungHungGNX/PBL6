import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Information about us</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={require("../assets/img/about/a6.jpg")} alt=""></img>
        <div>
          <h2 className="who-we-are">Who We Are?</h2>
          <p style={{fontFamily:'"Ubuntu", sans-serif'}}>
            We develop our own brands, treating each as an independent label
            with its own creative team and aesthetic. As a group, they have a
            few things in common: an effortless appeal, a focus on fit and an
            of-the-moment point of view. We sweat the small stuff. It's why we
            search out the best mills and factories around the world. It's why
            we consider (and reconsider) every last seam, pleat and button. It's
            why our clothes look and feel so good.
          </p>
          <abbr title="" style={{fontFamily:'"Ubuntu", sans-serif'}}>
            We seek to create an inclusive world of self-expression where
            fashion takes off.{" "}
          </abbr>
          <br></br>
          <br></br>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%" style={{fontFamily:'"Ubuntu", sans-serif'}}>
            we seek to create an inclusive world of self-expression where
            fashion takes off.
          </marquee>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="/#">App</a>{" "}
        </h1>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src={require("../assets/img/about/1.mp4")}
          ></video>
        </div>
      </section>

      <section id="feature" className="section-p1 widthlength">
        <div className="fe-box">
          <img src={require("../assets/img/features/f1.png")} alt=""></img>
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f2.png")} alt=""></img>
          <h6>Online order</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f3.png")} alt=""></img>
          <h6>Save money</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f4.png")} alt=""></img>
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f5.png")} alt=""></img>
          <h6>Happy sell</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f6.png")} alt=""></img>
          <h6>F24/7 support</h6>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutScreen;
