import cup from "../assets/footer-line/cup.svg";
import gift from "../assets/footer-line/gift.svg";
import support from "../assets/footer-line/support.svg";
import warranty from "../assets/footer-line/warranty.svg";

export default function ShopFooter() {
  return (
    <>
      <div className="footer-quality">
        <div className="footer-element">
          <img src={cup} alt="" />
          <div className="text">
            <p>High quality</p>
            <span>crafted from top materials</span>
          </div>
        </div>
        <div className="footer-element">
          <img src={warranty} alt="" />
          <div className="text">
            <p>Warranty Protection</p>
            <span>Over 2 years</span>
          </div>
        </div>
        <div className="footer-element">
          <img src={gift} alt="" />
          <div className="text">
            <p>Free Shipping</p> <span>Order over 150$</span>
          </div>
        </div>
        <div className="footer-element">
          <img src={support} alt="" />
          <div className="text">
            <p>24/7 Support</p>
            <span>Dedicated support</span>
          </div>
        </div>
      </div>
    </>
  );
}
