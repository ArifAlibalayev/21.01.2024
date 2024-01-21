import React from "react";
import "./index.scss";

function Hero() {
  return (
    <section id="Hero">
      <div className="overlay"></div>
      <div className="heroTitle">
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolores officiis obcaecati ullam itaque quia?
        </p>
        <div className="heroButtons">
          <button className="shopNowButton">SHOP NOW</button>
          <button className="membershipButton">CLUB MEMBERSHIP</button>

        </div>
      </div>
    </section>
  );
}

export default Hero;
