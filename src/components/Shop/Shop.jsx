import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';

const FAKESTOREAPI_BASE_URL = 'https://fakestoreapi.com';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [, setCartItems] = useOutletContext();

  useEffect(() => {
    fetch(`${FAKESTOREAPI_BASE_URL}/products?limit=20`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }

        return response.json();
      })
      .then((result) => setProducts(result))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function addItem(product, quantity) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === existingItem.product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prevItems, { product, quantity }];
    });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    </>
  );
}

export default Shop;
