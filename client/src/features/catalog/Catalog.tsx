/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import { useState, useEffect } from 'react';

function Catalog() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 9,
      name: 'Purple React Woolen Hat',
      description:
        'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 1500,
      pictureUrl: '/images/products/hat-react2.png',
      type: 'Hats',
      brand: 'React',
      quantityInStock: 100,
    },
    {
      id: 10,
      name: 'Purple React Woolen Hat',
      description:
        'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 1500,
      pictureUrl: '/images/products/hat-react2.png',
      type: 'Hats',
      brand: 'React',
      quantityInStock: 100,
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:5217/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default Catalog;
