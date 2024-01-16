import React from "react";
import logoFooter from "./../../../public/logo_footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-footer-container">
        <img className="logo-footer" src={logoFooter} alt="logo Kasa" />
        <p className="copyright">&#169; 2020 Kasa.All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
