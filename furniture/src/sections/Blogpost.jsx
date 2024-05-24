import admin from "../assets/blog-img-nav/admin.svg";
import date from "../assets/blog-img-nav/date.svg";
import tag from "../assets/blog-img-nav/tag.svg";

export default function Blogpost({ image, heading }) {
  return (
    <div className="blogpost">
      <div className="blog-image">
        <img src={image} alt="Blog Image" />
        <div className="blog-img-nav">
          <span>
            <div className="blog-nav-el">
              <img src={admin} alt="Admin" />
              <p className="lighttext">Admin</p>
            </div>
            <div className="blog-nav-el">
              <img src={date} alt="Date" />
              <p className="lighttext">14 Oct 2022</p>
            </div>
            <div className="blog-nav-el">
              <img src={tag} alt="Tag" />
              <p className="lighttext">Wood</p>
            </div>
          </span>
        </div>
      </div>
      <h1>{heading}</h1>
      <div className="blog-text">
        <p className="lighttext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tenetur dolor perspiciatis inventore quia adipisci sunt non nihil sit
          et aspernatur, dignissimos repudiandae mollitia recusandae voluptates
          dolores! Possimus, voluptas dolor. Eveniet voluptatem dignissimos
          dolorem quas totam. Est, officia eum. Velit consequatur nostrum,
          quaerat sint adipisci qui numquam cupiditate eveniet sunt dolorum
          dolorem, repellendus molestias totam. Voluptatem dignissimos sit harum
          pariatur! Omnis incidunt quaerat inventore maxime magni unde aperiam
          modi et facilis quibusdam magnam, ipsa dolorum consequuntur doloribus
          non molestiae molestias! Molestias suscipit eaque ut hic, recusandae
          error natus repudiandae ex. Autem est asperiores error aliquid unde
          vero dignissimos iusto facilis nobis ipsum non cumque atque doloribus
          dolores voluptatum quasi id porro quo, quaerat sed tempora laudantium
          beatae quod! Doloribus, adipisci? Cupiditate hic adipisci animi,
          numquam similique voluptates saepe dolorem necessitatibus ducimus
          repellat voluptatum incidunt ea tempora ab qui, recusandae reiciendis
          dignissimos corrupti architecto nesciunt est. Officiis placeat nemo et
          quaerat?
        </p>
      </div>
      <button className="order">Read More</button>
    </div>
  );
}
