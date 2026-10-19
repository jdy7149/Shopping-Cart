import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';

const FAKESTOREAPI_BASE_URL = 'https://fakestoreapi.com';

function Shop({ addItem }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${FAKESTOREAPI_BASE_URL}/products?limit=20`)
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

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
