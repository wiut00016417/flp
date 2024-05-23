export default function Slide({ image, description }) {
  return (
    <div className="slide">
      <img src={image} alt="Product" />
      <p>{description}</p>
    </div>
  )
}
