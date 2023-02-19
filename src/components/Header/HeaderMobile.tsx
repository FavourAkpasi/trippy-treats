import { Button } from '@mui/material';
import Logo from '../../assets/images/logo.png';

const HeaderMobile = () => {
  return (
    <header className="mobile-header">
      <img src={Logo} alt="logo" />
      <div>
        <h2>TRADITIONAL BAKERY & CONFECTIONERY</h2>
        <br />
        <p>
          Trippy Treats is passionate about making goodies - cookies, cupcakes, brownies, cakes, gummies, chocolates and
          more - using traditional baking techiques with high quality ingridents. please be informed that all products
          from us are made with love and infused what some might consider excessive happiness.
        </p>
        <br />
        <Button variant="contained" color="success">
          SHOP NOW
        </Button>
      </div>
    </header>
  );
};

export default HeaderMobile;
