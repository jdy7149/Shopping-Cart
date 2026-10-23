import { Link } from 'react-router';
import { useOutletContext } from 'react-router';
import CartItem from '../CartItem/CartItem';

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

  if (cartItems.length === 0) {
    return (
      <div>
        <p>No Items in cart.</p>
        <Link to="/shop">Browse Shop</Link>
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
    <div>
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
  );
}

export default Cart;
