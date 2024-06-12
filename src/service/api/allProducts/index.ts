import { IProduct } from '../../../type/product.interface';

// Get All
export const getAllProductsAPI = async () => {
  const response = await fetch('http://localhost:8070/api/allProducts/getAllProducts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};

// Delete All
export const deleteAllProductsAPI = async (showAllProducts: IProduct[]) => {
  const response = await fetch(
    `http://localhost:8070/api/allProducts/deleteAllProducts?keyboardId=${showAllProducts}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  return result;
};
