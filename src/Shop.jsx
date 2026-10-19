import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';

const FAKESTOREAPI_BASE_URL = 'https://fakestoreapi.com';

function Shop({ addItem }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard product={product} addItem={addItem} />
        ))}
      </div>
    </>
  );
}

export default Shop;
