import "./Navbar.css";
import React, { useEffect, useState } from "react";
import NavbarLarge from "./NavbarLarge";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return <>{viewportWidth < 700 ? <NavbarMobile /> : <NavbarLarge />}</>;
};

export default Navbar;
