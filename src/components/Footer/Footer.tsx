import React from "react";
import "./Footer.css";
import { Instagram, Phone, Twitter, WhatsApp } from "@mui/icons-material";
const Footer = () => {
  return (
    <footer>
      <img src="images/logo.png" alt="logo" />
      <div className="socials">
        <a href="tel:0815 982 1641">
          <Phone />
        </a>
        <a href="http://instagram.com/trippytreaats" target="_blank">
          <Instagram />
        </a>
        <a href="http://twitter.com/trippytreatss" target="_blank">
          <Twitter />
        </a>
        <a href="https://wa.me/2348159821641" target="_blank">
          <WhatsApp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
