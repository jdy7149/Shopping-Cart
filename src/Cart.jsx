import { useOutletContext } from "react-router";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();

}

export default Cart;