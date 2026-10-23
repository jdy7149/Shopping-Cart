import styles from './CartItem.module.css';
import Icon from '@mdi/react';
import { mdiStar, mdiTrashCan } from '@mdi/js';

function CartItem({ product, quantity, deleteItem, updateQuantity }) {
  const { id, title, price, description, image, rating } = product;

  function handleDecrement() {
    if (quantity <= 1) return;

    updateQuantity(id, quantity - 1);
  }

  return (
    <article className={styles.item}>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rating}>
          <Icon path={mdiStar} size={1} aria-hidden="true" />
          {rating.rate}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{price}</div>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantityControls}>
          <button
            className={styles.quantityButton}
            type="button"
            onClick={handleDecrement}
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
            readOnly
          />

          <button
            className={styles.quantityButton}
            type="button"
            onClick={() => updateQuantity(id, quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className={styles.deleteButton}
          type="button"
          aria-label={`Delete ${title}`}
          onClick={() => deleteItem(id)}
        >
          <Icon path={mdiTrashCan} size={1} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
