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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li><a href=""><img src={contact} alt="Contact" /></a></li>
                    <li><a href=""><img src={search} alt="Search" /></a></li>
                    <li><a href=""><img src={like} alt="Like" /></a></li>
                    <li><a href=""><img src={basket} alt="Basket" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header