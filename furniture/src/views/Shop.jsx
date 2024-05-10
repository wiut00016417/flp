import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";
import Pagination from "../components/Pagination";

function Shop(){
    return(
        <>
            <Header />
            <ShopHeader />
            <Products />
            <Pagination />
            <ShopFooter />
            <Footer />
        </>
    )
}

export default Shop