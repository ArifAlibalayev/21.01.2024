import React from "react";
import "./index.scss";

function AboutUs() {
  return (
    <section id="AboutUs">
      <div className="aboutUsImg">
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp"
          alt=""
        />
        <div className="trustedMerchant">
          <h1>Trusted Merchant</h1>
          <p>FOR 50 YEARS</p>
        </div>
      </div>
      <div className="aboutUsTitle">
        <span>MERCHANT COMPANY</span>
        <h2>About Us</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat
          aliquid blanditiis, dolorem animi id officia. Ipsum odit sunt
          aspernatur maiores cupiditate?
        </p>
        <button>LEARN MORE</button>
      </div>
    </section>
  );
}

export default AboutUs;
