import "./App.css";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import NotFound from "./views/NoPage";
import Checkout from "./views/Checkout";
import Comparison from "./views/Comparison";
import Product from "./views/Product";
import Ascart from "./components/As-cart";
import Osscart from "./components/Oss-cart";
import Blog from "./views/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // useEffect
  // useState
  // useMemo
  // useCallback
  // useRef
  // memo
  // useContext
  // createContext - 22.05

  // css practice teng redux

  // tanstack query axios - 23.05
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BaseLayout />} />
        <Route
          path="Home"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path="Shop"
          element={
            <BaseLayout>
              <Shop />
            </BaseLayout>
          }
        />
        <Route
          path="Contact"
          element={
            <BaseLayout>
              <Contact />
            </BaseLayout>
          }
        />
        <Route
          path="Checkout"
          element={
            <BaseLayout>
              <Checkout />
            </BaseLayout>
          }
        />
        <Route
          path="Comparison"
          element={
            <BaseLayout>
              <Comparison />
            </BaseLayout>
          }
        />
        <Route
          path="Product"
          element={
            <BaseLayout>
              <Product />
            </BaseLayout>
          }
        />
        <Route
          path="*"
          element={
            <BaseLayout>
              <NotFound />
            </BaseLayout>
          }
        />
        <Route
          path="About"
          element={
            <BaseLayout>
              <Blog />
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
