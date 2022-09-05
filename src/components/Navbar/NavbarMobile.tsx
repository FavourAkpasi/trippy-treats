import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SideNav from "../SideNav/SideNav";
import { useNavigate } from "react-router-dom";

const NavbarMobile = () => {
  useEffect(() => {
    const icon = document.getElementById("icon") as HTMLElement;
    const nav = document.querySelector("nav") as HTMLElement;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        icon.style.display = "block";
        nav.classList.add("bg-blur");
      } else {
        icon.style.display = "none";
        nav.classList.remove("bg-blur");
      }
    };
  }, []);

  const navigate = useNavigate();
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <nav>
      <div>
        {!openSideNav && (
          <MenuIcon
            id="menu_bar"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
        )}

        <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      </div>
      <div onClick={() => navigate("/")}>
        <img id="icon" src="images/icon.png" alt="icon" width="40rem" />
      </div>
      <div className="header-right">
        <ShoppingCartIcon onClick={() => navigate("/")} />
      </div>
    </nav>
  );
};

export default NavbarMobile;
