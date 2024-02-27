/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../../product.interface';

const AllProducts = () => {
  useEffect(() => {
    const getAllProductsFunc = async () => {
      const response = await fetch('http://localhost:8070/api/allProducts/getAllProducts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      setShowAllProducts(result.result);
    };
    getAllProductsFunc();
  }, []);

  const [showAllProducts, setShowAllProducts] = useState<IProduct[]>([]);

  return (
    <div>
      {showAllProducts.map((product: IProduct) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default AllProducts;
