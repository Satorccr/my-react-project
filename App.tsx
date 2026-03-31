import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Каталог товаров</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1fr solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
