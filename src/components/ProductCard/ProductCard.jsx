import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

function ProductCard({ product, addItem }) {
  const [quantity, setQuantity] = useState(1);

  const { title, price, description, image, rating } = product;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div><Icon path={mdiStar} size={1} />{rating.rate}</div>
      <p>{description}</p>
      <div>{price}</div>
      <div>
        <button
          type="button"
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          -
        </button>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
          +
        </button>
      </div>
      <button type="button" onClick={() => addItem(product, quantity)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
