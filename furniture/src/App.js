import './App.css';
import Home from './views/Home'
import Shop from './views/Shop'
import About from './views/About'
import Contact from './views/Contact'
import NotFound from './views/NoPage';
import Checkout from './views/Checkout';
import Comparison from './views/Comparison';
import Product from './views/Product';
import Cart from './views/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='comparison' element={<Comparison />} />
                <Route path='product' element={<Product />} />
                <Route path='cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
