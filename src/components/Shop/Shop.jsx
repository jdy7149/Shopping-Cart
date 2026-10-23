import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import styles from './Shop.module.css';

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

  if (loading) {
    return <div className={styles.status}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.error} role="alert">
        {error.message}
      </div>
    );
  }

  return (
    <section className={styles.shop}>
      <h1 className={styles.heading}>Products</h1>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
