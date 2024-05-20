import logo from '../assets/logo.svg'
import {NavLink} from "react-router-dom"
import contact from '../assets/contact.svg'
import search from '../assets/search.svg'
import like from '../assets/like.svg'
import basket from '../assets/basket.svg'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <p>Furniro</p>
            </div>
            <div className="links">
                <ul>
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/Shop">Shop</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li><NavLink to=""><img src={contact} alt="Contact" /></NavLink></li>
                    <li><NavLink to=""><img src={search} alt="Search" /></NavLink></li>
                    <li><NavLink to="/product"><img src={like} alt="Like" /></NavLink></li>
                    <li><NavLink to="/checkout"><img src={basket} alt="Basket" /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header