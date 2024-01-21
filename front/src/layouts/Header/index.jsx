import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
// const [dropdown, setDropdown] = useState(true)

// function handleDropdown() {
//   setDropdown(!dropdown)
// }

  return (
    <header id="header">
      <nav id="headerNav">
        <div className="logo">
          <h2>Selling</h2>
          <span>.</span>
        </div>
        <div className="navBtns">
          <ul>
            <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Home</li>
            </NavLink>
            <NavLink to={'/Add'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Add</li>
            </NavLink>
            <NavLink to={'/Basket'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Basket</li>
            </NavLink>
            <NavLink to={'/Wishlist'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Wishlist</li>
            </NavLink>
            <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>About</li>
            </NavLink>
            <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
            <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="responsiveMenu">
        <i className="fa-solid fa-bars"></i>
        </div>

      </nav>
        {/* <div className={dropdown ? "dropDownMenu active" : "dropDownMenu pending"}>
          <ul>
              <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>Home</li>
              </NavLink>
              <NavLink to={'/Add'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>Add</li>
              </NavLink>
              <NavLink to={'/Basket'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>Basket</li>
              </NavLink>
              <NavLink to={'/Wishlist'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>Wishlist</li>
              </NavLink>
              <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>About</li>
              </NavLink>
              <NavLink to={'/'} className={true ? "activeNavLink" : "pendingNavLink"}>
              <li>Contact</li>
              </NavLink>
            </ul>
          </div> */}

    </header>
  );
}

export default Header;
