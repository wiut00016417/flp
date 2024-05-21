import Products from "../components/Products";
import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter-line";

function Shop() {
  return (
    <>
      <ShopHeader headtext={"Shop"} />
      <Filter />
      <Products />
      <Pagination />
      <ShopFooter />
    </>
  );
}

export default Shop;
