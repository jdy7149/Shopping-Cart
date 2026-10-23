import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import styles from './ProductCard.module.css';

function ProductCard({ product, addItem }) {
  const [quantity, setQuantity] = useState(1);
  const { title, price, description, image, rating } = product;

  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.rating}>
        <Icon
          path={mdiStar}
          size={0.9}
          className={styles.star}
          aria-hidden="true"
        />
        <span>{rating.rate}</span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.price}>{price}</div>

      <div className={styles.quantityControls}>
        <button
          className={styles.quantityButton}
          type="button"
          onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          -
        </button>

        <input
          className={styles.quantityInput}
          type="number"
          name="quantity"
          aria-label={`Quantity for ${title}`}
          value={quantity}
          min="1"
          onChange={(event) => setQuantity(Number(event.target.value))}
        />

        <button
          className={styles.quantityButton}
          type="button"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <button
        className={styles.addButton}
        type="button"
        onClick={() => addItem(product, quantity)}
      >
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
