import { useState } from "react";
import CloseMenu from "../../assets/x.svg?react";
import MenuIcon from "../../assets/menu.svg?react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/SK_LOGO-02.svg";
import "./header.scss";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Work experience" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/books", label: "My book" },
  { to: "/games", label: "My game" },
  { to: "/contact", label: "Contact" },
];

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
              <img src={logo} alt="logo" className="logo" />
            </NavLink>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            {navLinks.map(({ to, label }) => (
              <li className="option" onClick={closeMobileMenu} key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : undefined
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mobile-menu"
          onClick={handleClick}
          aria-label={click ? "Close menu" : "Open menu"}
          aria-expanded={click}
        >
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
