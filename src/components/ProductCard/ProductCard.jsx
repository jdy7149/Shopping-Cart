import { useState } from "react";

function ProductCard({ product, addItem }) {
  const [quantity, setQuantity] = useState(1);

  const { id, title, price, description, image, rating } = product;

  function handleAdd() {
    const quantity = Number(document.querySelector(`#quantity-${id}`).value);

    addItem(product, quantity);
  }

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{rating.rate}</div>
      <p>{description}</p>
      <div>{price}</div>
      <div>
        <button type="button">-</button>
        <input type="number" name="quantity" id={`quantity-${id}`} value={1} min={1} />
        <button type="button">+</button>
      </div>
      <button type="button" onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

export default ProductCard;