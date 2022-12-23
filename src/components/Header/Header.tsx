import { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import RouterConfig from "../../RouterConfig";
import logo from "../../assets/logo/SK_LOGO-02.svg"
import "./Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar-wrapper">
      <div className="header">
        <div className="desktop">
          <div className="logo-container">
            <NavLink to="/" id="logo">
              <img src={logo} alt="logo" className="logo"/>
            </NavLink>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/experience" activeClassName="active-link">
                Detailed work experience
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/portfolio" activeClassName="active-link">
                Portfolio
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/game" activeClassName="active-link">
                My game
              </NavLink>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
      <RouterConfig />
    </div>
  );
};

export default Header;
