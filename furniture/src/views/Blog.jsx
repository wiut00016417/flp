import Blogpost from "../sections/Blogpost";
import blog1 from "../assets/blog-images/blog1.png";
import blog2 from "../assets/blog-images/blog2.png";
import blog3 from "../assets/blog-images/blog3.png";
import Pagination from "../components/Pagination";
import ShopFooter from "../components/ShopFooter";
import ShopHeader from "../components/ShopHeader";


export default function Blog() {
  return (
    <div className="blog-page">
      <ShopHeader headtext={"Blog"} />
      <div className="blog-page-content">
        <div className="blog-content">
          <Blogpost
            image={blog1}
            heading={"Going all-in with millennial design"}
          />
          <Blogpost image={blog2} heading={"Exploring new ways of decorating"} />
          <Blogpost
            image={blog3}
            heading={"Handmade pieces that took time to make"}
          />
        </div>
        <div className="blog-side-panel">
          <div className="blog-categories">
            <input type="text" />
            <h1>Categories</h1>
            <div className="blog-category">
              <p className="lighttext">Crafts</p>
              <p className="lighttext">2</p>
            </div>
            <div className="blog-category">
              <p className="lighttext">Design</p>
              <p className="lighttext">8</p>
            </div>
            <div className="blog-category">
              <p className="lighttext">Handmade</p>
              <p className="lighttext">7</p>
            </div>
            <div className="blog-category">
              <p className="lighttext">Wood</p>
              <p className="lighttext">6</p>
            </div>
            <div className="blog-category">
              <p className="lighttext">Interior</p>
              <p className="lighttext">7</p>
            </div>
          </div>
          <div className="recent-blogs">
            <h1>Recent Posts</h1>
            <div className="recent-post">
              <img src="" alt="" />
              <p>Going all-in with millennial design</p>
            </div>
            <div className="recent-post">
              <img src="" alt="" />
              <p>Exploring new ways of decorating</p>
            </div>
            <div className="recent-post">
              <img src="" alt="" />
              <p>Handmade pieces that took time to make</p>
            </div>
            <div className="recent-post">
              <img src="" alt="" />
              <p>Modern home in Milan</p>
            </div>
            <div className="recent-post">
              <img src="" alt="" />
              <p>Colorful office redesign</p>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
      <ShopFooter />
    </div>
  );
}
