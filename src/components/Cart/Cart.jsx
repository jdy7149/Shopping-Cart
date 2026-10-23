import { Link, useOutletContext } from 'react-router';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>No Items in cart.</p>
        <Link className={styles.browseButton} to="/shop">
          Browse Shop
        </Link>
      </div>
    );
  }

  function deleteItem(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== id),
    );
  }

  function updateQuantity(id, quantity) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === id ? { ...item, quantity } : item,
      ),
    );
  }

  return (
    <section className={styles.cart} aria-label="Shopping cart">
      <div className={styles.items}>
        {cartItems.map(({ product, quantity }) => (
          <CartItem
            key={product.id}
            product={product}
            quantity={quantity}
            deleteItem={deleteItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
    </section>
  );
}

export default Cart;
