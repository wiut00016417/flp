import Header from '../components/Header';
import Banner from '../components/Banner';
import Range from '../components/Range';
import Products from '../components/Products';
import Rooms from '../components/Rooms'
import Footer from '../components/Footer';

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Range />
            <Products />
            <Rooms />
            <Footer />
        </>
    )
}

export default Home