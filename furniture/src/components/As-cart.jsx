import Header from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import ShopFooter from '../components/ShopFooter'
import Footer from '../components/Footer'
import product1 from '../assets/comparison/product1.png'
import deleteBtn from '../assets/delete.svg'

export default function Cart(){
    
    return (
        <div className="cart-page">
            <Header />
            <ShopHeader headtext={'Cart'} />
            <div className="cart-self">
                <div className="cart-product">
                    <div className="cart-titles">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <div className="cart-details">
                        <img src={product1} height='105px' Width='108px' alt="Asgard" />
                        <p>Asgard Sofa</p>
                        <p>Rs. 250.000,00</p>
                        <p>1</p>
                        <p>Rs. 250.000,00</p>
                        <button><img src={deleteBtn} alt="Delete" /></button>
                    </div>
                </div>
                <div className="cart-card">
                    <div className="card-title">
                        <p>Cart Totals</p>
                        <div className="card-details">
                            <p>Subtotal</p>
                            <p className='lighttext'>Rs. 250.000,00</p>
                        </div>
                        <div className="card-details">
                            <p>Total</p>
                            <p>Rs. 250.000,00</p>
                        </div>
                        <button className="order">Check Out</button>
                    </div>
                </div>
            </div>
            <ShopFooter />
            <Footer />
        </div>
    )
}