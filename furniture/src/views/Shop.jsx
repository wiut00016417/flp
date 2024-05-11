import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter-line"

function Shop(){
    return(
        <>
            <Header />
            <ShopHeader headtext={'Shop'}/>
            <Filter />
            <Products />
            <Pagination />
            <ShopFooter />
            <Footer />
        </>
    )
}

export default Shop