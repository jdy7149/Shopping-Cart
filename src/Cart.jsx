import { Link } from 'react-router';
import { useOutletContext } from 'react-router';

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
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== id))
  }

}

export default Cart;
