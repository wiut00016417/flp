import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import contact from "../assets/contact.svg";
import search from "../assets/search.svg";
import like from "../assets/like.svg";
import basket from "../assets/basket.svg";
import { useState, useEffect } from "react";

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const handleResize = () => {
    const width = window.innerWidth;
    const newToggle = width > 650 ? false : true;
    setIsToggle(newToggle);
  };

  useEffect(() => {
    const isResized = () => handleResize();
    window.addEventListener("resize", isResized);

    return () => window.removeEventListener("resize", isResized);
  }, []);

  const handleMenu = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="header">
      <div className={`menu ${isToggle && "toggle"}`}>
        <ul>
          <li>
            <NavLink href="">Home</NavLink>
          </li>
          <li>
            <NavLink href="Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink href="About">About</NavLink>
          </li>
          <li>
            <NavLink href="Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <p>Furniro</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li>
              <NavLink to="/Contact">
                <img src={contact} alt="Contact" />
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <img src={search} alt="Search" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                <img src={like} alt="Like" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/checkout">
                <img src={basket} alt="Basket" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <button
        id="menu-toggle"
        aria-label="Toggle Navigation"
        onClick={handleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Header;
