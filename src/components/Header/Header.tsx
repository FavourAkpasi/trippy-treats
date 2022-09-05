import { Button } from "@mui/material";
import "./Header.css";
import React, { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderLarge from "./HeaderLarge";

const Header = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);
  return <>{viewportWidth < 600 ? <HeaderMobile /> : <HeaderLarge />}</>;
};

export default Header;
