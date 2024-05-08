import './App.css';
import Home from './views/Home'
import Shop from './views/Shop'
import About from './views/About'
import Contact from './views/Contact'
import NotFound from './views/NoPage';
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
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
