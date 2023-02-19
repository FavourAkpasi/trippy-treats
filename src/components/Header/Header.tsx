import { useEffect, useState } from 'react';
import './Header.css';
import HeaderLarge from './HeaderLarge';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, [viewportWidth]);
  return <>{viewportWidth < 700 ? <HeaderMobile /> : <HeaderLarge />}</>;
};

export default Header;
