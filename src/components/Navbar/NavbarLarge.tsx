import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLarge = () => {
  useEffect(() => {
    const icon = document.getElementById('icon') as HTMLElement;
    const nav = document.querySelector('nav') as HTMLElement;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        icon.style.opacity = '1';
        nav.classList.add('bg-blur');
      } else {
        icon.style.opacity = '0';
        nav.classList.remove('bg-blur');
      }
    };
  }, []);
  return (
    <nav>
      <div>
        <NavLink to="/">
          <img id="icon" src="images/icon.png" alt="icon" width="50rem" />
        </NavLink>
      </div>
      <div className="link">
        <NavLink className="navlink" to="">
          OUR CATEGORIES
        </NavLink>
        <NavLink className="navlink" to="/order">
          CUSTOMIZE ORDER
        </NavLink>
      </div>
      <div>
        <NavLink className="navlink" to="/login">
          <PersonIcon />
        </NavLink>
        <NavLink className="navlink" to="/cart">
          <ShoppingBasketIcon />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavbarLarge;
