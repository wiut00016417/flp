import Products from '../components/Products';
import ShopFooter from '../components/ShopFooter';
import CounterButton from '../components/Counter-Button';
import fb from '../assets/sm-logos/facebook.svg'
import lin from '../assets/sm-logos/linkedin.svg'
import twit from '../assets/sm-logos/twitter.svg'
import sofa from '../assets/ad-sofa.png'
import img1 from '../assets/button-images/img1.png'
import img2 from '../assets/button-images/img2.png'
import img3 from '../assets/button-images/img3.png'
import img4 from '../assets/button-images/img4.png'
import mainpic from '../assets/button-images/main-pic.png'


export default function Product(){
    return (
        <div className="product-page">
            <div className="product-purchase">
                <div className="product-info">
                    <div className="product-pics">
                        <div className="vertical-pics">
                            <img src={img1} alt="" /><img src={img2} alt="" /><img src={img3} alt="" /><img src={img4} alt="" />
                        </div>
                        <div className="main-pic"><img src={mainpic} alt="Asgard Sofa" /></div>
                    </div>
                    <div className="product-text">
                        <h1>Asgard Sofa</h1>
                        <p>Rs. 250,000.00</p>
                        <span className="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</span>  
                        <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        <div className="product-purchase-size">
                            <p className='lighttext'>Size</p>
                            <span className="sizes">
                                <button>L</button><button>XL</button><button>XS</button>
                            </span>
                        </div>
                        <div className="product-purchase-color">
                            <p className='lighttext'>Color</p>
                            <span className="colors">
                                <div className="colored-btn"><button className="color-purple"></button></div>
                                <div className="colored-btn"><button className="color-black"></button></div>
                                <div className="colored-btn"><button className="color-brown"></button></div>
                            </span>
                        </div>
                        <div className="product-purchase-buttons">
                            <CounterButton />
                            <button className="order" style={{margin: '0 40px'}}>Add To Cart</button>
                            <button className="order" style={{margin: '0 40px'}}>+ Compare</button>
                        </div>
                        <div className="footer-line"></div>
                        <div className="product-purchase-certificate">
                            <div className="certificate-titles">
                                <div className="certificate-title1"><p>SKU</p></div>
                                <div className="certificate-title2"><p>Category</p></div>
                                <div className="certificate-title3"><p>Tags</p></div>
                                <div className="certificate-title4"><p>Share</p></div>
                            </div>
                            <div className="certificate-values">
                                <div className="certificate-value"><p>SS01</p></div>
                                <div className="certificate-value"><p>Sofas</p></div>
                                <div className="certificate-value"><p>Sofa, Chair, Home, Shop</p></div>
                                <div className="certificate-value4">
                                    <span>
                                        <img src={fb} alt="facebook" /><img src={lin} alt="linkedin" /><img src={twit} alt="twitter" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-ad">
                    <div className="ad-titles"><a href="">Description</a><a href="">Additional Information</a><a href="">Reviews (5)</a></div>
                    <div className="ad-text">
                        <p className='lighttext'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className='lighttext'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                    <div className="ad-pics">
                        <img src={sofa} alt="Sofas" />
                    </div>
                </div>
            </div>
            <Products headtext={'Related Products'}/>
            <ShopFooter />
        </div>
    )
}