import "./SideNav.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: Function;
};

function SideNav({ openSideNav, setOpenSideNav }: SideNavProps) {
  return (
    <div className="side_nav" style={{ width: `${openSideNav ? "60%" : "0"}` }}>
      <ul>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">COOKIES</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">CUPCAKES</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/"> BROWNIES</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/signin">GUMMIES</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">CAKE SLICES</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">CHOCO BARS</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">BOX OF TREATS</Link>
        </li>
        <li onClick={() => setOpenSideNav(!openSideNav)}>
          <Link to="/">CUSTOMIZE YOUR ORDER</Link>
        </li>
      </ul>
      {openSideNav && (
        <button id="close_btn" onClick={() => setOpenSideNav(!openSideNav)}>
          <CloseIcon color="success" />
        </button>
      )}
    </div>
  );
}

export default SideNav;
