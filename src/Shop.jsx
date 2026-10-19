import { useEffect, useState } from 'react';

const FAKESTOREAPI_BASE_URL = 'https://fakestoreapi.com';

function Shop({ addItem }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${FAKESTOREAPI_BASE_URL}/products?limit=20`)
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);
}

export default Shop;
