import image1 from '../assets/slider.png'
import image2 from '../assets/productgallery/image2.png'
import image3 from '../assets/productgallery/image3.png'
import image4 from '../assets/productgallery/image4.png'
import Button from "./Button"
import Pagination from "./Pagination"

export default function Rooms(){ 
    return(
        <div className="ad">
            <div className="ad-content">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>Our designer already made a lot of beautiful prototype rooms that will inspire you</p>
                <a href="product"><Button text={'Explore More'} /></a>
            </div>
            <div className="image-slider">
                <div className="slide">
                    <div className="content">
                        <img src={image1} alt="Inner Peace" />
                        <div className="nav-panel">
                            <div className="desc">
                                <p>0 - 1 Bedroom</p>
                                <h2>Inner Peace</h2>
                            </div>
                            <button className='thenext'>&gt;</button>
                        </div>
                    </div>
                    <div className="images">
                        <img src={image2} alt="Outer Space" />
                        <img src={image3} alt="Audacity Sus" />
                        <img src={image4} alt="Likelihood Lake" />
                    </div>
                </div>
            </div>
        </div>
    )
}