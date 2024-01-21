import React from "react";
import "./index.scss";

function Footer() {
  return (
    <footer id="Footer">
      <nav id="footerNav">
        <div className="aboutUs">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            culpa exercitationem nobis voluptates eius facere suscipit a
            accusamus totam repellat.
          </p>
        </div>
        <div className="quickLinks">
          <h3>Quick Links </h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="followUs">
          <h3>FOLLOW US</h3>
          <div className="footerSocials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="featuredProduct">
          <h3>FEATURED PRODUCT</h3>
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
            alt=""
          />
            <p>Leather Brown Shoe</p>
            <h2>$60.00</h2>
            <button>ADD TO CART</button>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
