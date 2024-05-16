import Header from '../components/Header';
import Banner from '../components/Banner';
import Range from '../components/Range';
import Products from '../components/Products';
import Footer from '../components/Footer';
import ImageSlider from '../components/Rooms';
import bedroom from '../assets/bedroom.png'
import slider from '../assets/slider.png'
import dining from '../assets/dining.jpg'
import living from '../assets/living.jpg'
const images = [slider, dining, bedroom, living]
const descriptions = ['Inner Peace',
    'Audacity', 'Outer Space', 'Chilli sauce'
]


function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Range />
            <Products headtext={'Our Products'} />
            <ImageSlider images={images} descriptions={descriptions}/>
            <Footer />
        </>
    )
}

export default Home