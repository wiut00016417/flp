import image1 from '../assets/productgallery/image1.png'
import image2 from '../assets/productgallery/image2.png'
import image3 from '../assets/productgallery/image3.png'
import image4 from '../assets/productgallery/image4.png'
import image5 from '../assets/productgallery/image5.png'
import image6 from '../assets/productgallery/image6.png'
import image7 from '../assets/productgallery/image7.png'
import image8 from '../assets/productgallery/image8.png'
import Button from './Button.jsx'

function Products(){
    return (
        <div className="products">
            <h1>Our Products</h1>
            <div className="product-gallery">
                <div className="product">
                    <img src={image1} alt="" />
                    <h2>Syltherine</h2>
                    <p>Stylish cafe chair</p>
                    <h2>2.500.000</h2>
                </div>
                <div className="product">
                    <img src={image2} alt="" />
                    <h2>Leviosa</h2>
                    <p>Stylish cafe chair</p>
                    <h2>2.500.000</h2>
                </div>
                <div className="product">
                    <img src={image3} alt="" />
                    <h2>Lolito</h2>
                    <p>Luxury big sofa</p>
                    <h2>7.000.000</h2>
                </div>
                <div className="product">
                    <img src={image4} alt="" />
                    <h2>Respira</h2>
                    <p>Outdoor bar table and stool</p>
                    <h2>500.000</h2>
                </div>
                <div className="product">
                    <img src={image5} alt="" />
                    <h2>Grifo</h2>
                    <p>Night lamp</p>
                    <h2>1.500.000</h2>
                </div>
                <div className="product">
                    <img src={image6} alt="" />
                    <h2>Muggo</h2>
                    <p>Small mug</p>
                    <h2>150.000</h2>
                </div>
                <div className="product">
                    <img src={image7} alt="" />
                    <h2>Mingky</h2>
                    <p>Cute bed set</p>
                    <h2>7.000.000</h2>
                </div>
                <div className="product">
                    <img src={image8} alt="" />
                    <h2>Potty</h2>
                    <p>Minimalist flower pot</p>
                    <h2>500.000</h2>
                </div>
            </div>
            <div className="button-show">
                <Button text={'SHOW MORE'}><a href=''>s</a></Button>
            </div>
        </div>
    )
}

export default Products