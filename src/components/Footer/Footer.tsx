import { Instagram, Phone, Twitter, WhatsApp } from '@mui/icons-material';
import Logo from '../../assets/images/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <div className="socials">
        <a href="tel:0815 982 1641">
          <Phone />
        </a>
        <a href="http://instagram.com/trippytreaats" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a href="http://twitter.com/trippytreatss" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a href="https://wa.me/2348159821641" target="_blank" rel="noreferrer">
          <WhatsApp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
