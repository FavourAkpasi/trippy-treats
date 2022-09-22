import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer>
      <img src="images/logo.png" alt="logo" />
      <div className="socials">
        <InstagramIcon />
        <TwitterIcon />
        <PhoneIcon />
      </div>
    </footer>
  );
};

export default Footer;
