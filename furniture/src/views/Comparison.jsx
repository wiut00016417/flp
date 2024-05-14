import Header from "../components/Header";
import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";
import Footer from "../components/Footer";

export default function Comparison(){
    return (
        <div className="comparison-page">
            <Header />
            <ShopHeader headtext={'Comparison'}/>
            <div className="comparison">
                
            </div>
            <ShopFooter />
            <Footer />
        </div>
    )
}