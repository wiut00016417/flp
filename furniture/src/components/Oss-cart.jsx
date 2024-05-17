import Header from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import ShopFooter from '../components/ShopFooter'
import Footer from '../components/Footer'
import product2 from '../assets/comparison/product2.png'

export default function Osscart(){
    return (
        <div className="cart-page">
            <Header />
            <ShopHeader headtext={'Cart'} />
            <div className="cart-content">
                <div className="cart-pic"></div>
            </div>
            <ShopFooter />
            <Footer />
        </div>
    )
}