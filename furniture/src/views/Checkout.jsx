import ShopHeader from "../components/ShopHeader"
import ShopFooter from "../components/ShopFooter"

export default function Checkout(){
    return (
        <div className="checkout">
            <ShopHeader headtext={'Checkout'}/>
            <div className="billing-form">
                <div className="billing-details">
                    <h1>Billing Details</h1>
                    <div className="name-surname">
                        <div className="name"><label htmlFor="">First Name</label><input type="text" /></div>
                        <div className="surname"><label htmlFor="">Last Name</label><input type="text" /></div>
                    </div>
                    <div className="billing-form-down">
                        <form action="billing" className="billing">
                            <label htmlFor="">Company Name</label><input type="text" />
                            <label htmlFor="">Country/Region</label>
                            <select name="country" id="">
                                <option value="Sri Lanka">Sri Lanka</option>
                            </select>
                            <label htmlFor="">Street Address</label><input type="text" />
                            <label htmlFor="">Town/City</label><input type="text" />
                            <label htmlFor="">Province</label>
                            <select name="province" id="province">
                                <option value="western">Western Province</option>
                            </select>
                            <label htmlFor="">Zip Code</label><input type="text" />
                            <label htmlFor="">Phone</label><input type="text" />
                            <label htmlFor="">Email Address</label><input type="text" />
                            <input type="text" placeholder="Additional Information"/>
                        </form>
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-price">
                        <div className="product-detail-line">
                            <p>Product</p>
                            <p>Subtotal</p>
                        </div>
                        <div className="product-detail-line">
                            <p className="lighttext">Asgard Sofa x 1</p>
                            <p>Rs 250,000.00</p>
                        </div>
                        <div className="product-detail-line">
                            <p>Subtotal</p>
                            <p>Rs 250,000.00</p>
                        </div>
                        <div className="product-detail-line">
                            <p>Total</p>
                            <p className="large-brown-text">Rs 250,000.00</p>
                        </div>
                    </div>
                    <div className="footer-line">
                    </div>
                    <div className="product-order">
                        <ul className="bank-transfer">
                            <li>Direct Bank Transfer</li>
                        </ul>
                        <p className="lighttext">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <ul className="transfer-types">
                            <li className="lighttext">Direct Bank Transfer</li>
                            <li className="lighttext">Cash On Delivery</li>
                        </ul>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <button className="order">Place order</button>
                    </div>
                </div>
            </div>
            <ShopFooter />
        </div>
    )
}