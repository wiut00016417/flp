function Footer(){
    return (
        <>
            <div className="footer-line"></div>
            <div className="footer">
                <div className="left-hand">
                    <h1>Funiro</h1>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="right-hand">
                    <div className="links">
                        <p>Links</p>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="help">
                        <p>Help</p>
                        <ul>
                            <li>Payment Options</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>
                    <div className="news">
                        <p>Newsletter</p>
                        <input type="text" className="emailinput" />
                    </div>
                </div>
                <div className="subscribe-button">
                    <a href="">Subscribe</a>
                </div>
            </div>
        </>
    )
}

export default Footer