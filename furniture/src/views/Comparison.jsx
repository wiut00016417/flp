import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";
import product1 from "../assets/comparison/product1.png";
import product2 from "../assets/comparison/product2.png";
import Button from "../components/Button";

export default function Comparison() {
  const leftBtn = () => {
    window.location.href = "ascart";
  };

  const rightBtn = () => {
    window.location.href = "osscart";
  };
  return (
    <div className="comparison-page">
      <ShopHeader headtext={"Comparison"} />
      <div className="comparison">
        <div className="general">
          <div className="title">
            <h2>Go to Product Page for more Products</h2>
            <a href="shop" className="lighttext">
              View More
            </a>
          </div>
          <div className="comparison-parameters">
            <div className="comparison-general">
              <h2>General</h2>
              <p>Sales Packages</p>
              <p>Model Number</p>
              <p>Secondary Material</p>
              <p>Configuration</p>
              <p>Upholstery Material</p>
              <p>Upholstery Color</p>
            </div>
            <div className="comparison-products">
              <h2>Product</h2>
              <p>Filling Material</p>
              <p>Finish Type</p>
              <p>Adjustable Headrest</p>
              <p>Maximum Load Capacity</p>
              <p>Origin of Manufacture</p>
            </div>
            <div className="comparison-dimensions">
              <h2>Dimensions</h2>
              <p>Width</p>
              <p>Height</p>
              <p>Depth</p>
              <p>Weight</p>
              <p>Seat Height</p>
              <p>Leg Height</p>
            </div>
            <div className="comparison-warranty">
              <h2>Warranty</h2>
              <p>Warranty Summary</p>
              <p>Warranty Service Type</p>
              <p>Covered in Warranty</p>
              <p>Not Covered in Warranty</p>
              <p>Domestic Warranty</p>
            </div>
          </div>
        </div>
        <div className="first-product">
          <div className="product-title">
            <div className="pic">
              <img src={product1} alt="product 1" />
            </div>
            <div className="product-description">
              <h3>Asgard Sofa</h3>
              <p>Rs. 250,000.00</p>
              <div className="product-reviews">
                <p>4.7</p>
                <div class="review-filler">
                  <span class="rating">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                  <p>204 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-general">
            <p>1 sectional sofa</p>
            <p>TFCBLIGRBL6SRHS</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
          <div className="product-product">
            <p>Foam</p>
            <p>Bright Grey & Lion</p>
            <p>No</p>
            <p>280 kg</p>
            <p>India</p>
          </div>
          <div className="product-dimensions">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>45 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>
          </div>
          <div className="product-warranty">
            <p>1 Year Manufacturing Warranty</p>
            <p>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p>Warranty Against Manufacturing Defect</p>
            <p>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p>1 Year</p>
          </div>
          <Button onCLick={leftBtn}>Add To Cart</Button>
        </div>
        <div className="second-product">
          <div className="product-title">
            <div className="pic">
              <img src={product2} alt="product 2" />
            </div>
            <div className="product-description">
              <h3>Outdoor Sofa Set</h3>
              <p>Rs. 250,000.00</p>
              <div className="product-reviews">
                <p>4.2</p>
                <div className="review-filler">
                  <span className="rating">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                  <p>204 reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product-general">
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-Shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
          <div className="product-product">
            <p>Matte</p>
            <p>Bright Gray & Lion</p>
            <p>Yes</p>
            <p>300 kg</p>
            <p>India</p>
          </div>
          <div className="product-dimensions">
            <p>265.32 cm</p>
            <p>76 cm</p>
            <p>167.76 cm</p>
            <p>65 KG</p>
            <p>41.52 cm</p>
            <p>5.46 cm</p>
          </div>
          <div className="product-warranty">
            <p>1.2 Year Manufacturing Warranty</p>
            <p>
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
            <p>
              Warranty of the product is limited to manufacturing defects only.
            </p>
            <p>
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
            <p>3 Months</p>
          </div>
          <Button onCLick={rightBtn}>Add To Cart</Button>
        </div>
        <div className="product-add">
          <h2>Add a Product</h2>
          <select name="choose" id="choose">
            <option value="default">Choose a Product</option>
          </select>
        </div>
      </div>
      <ShopFooter />
    </div>
  );
}
