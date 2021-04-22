import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="links">
          <div className="homeLink">
            <NavLink exact activeClassName="activeLink" to="/">
              Home
            </NavLink>
          </div>
          <div className="faqLink">
            <NavLink exact activeClassName="activeLink" to="/faq-page">
              FAQ-Page
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
