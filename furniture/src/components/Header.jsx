import logo from '../assets/logo.svg'
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
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li><a href=""><img src={contact} alt="Contact" /></a></li>
                    <li><a href=""><img src={search} alt="Search" /></a></li>
                    <li><a href="/product"><img src={like} alt="Like" /></a></li>
                    <li><a href="/checkout"><img src={basket} alt="Basket" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header