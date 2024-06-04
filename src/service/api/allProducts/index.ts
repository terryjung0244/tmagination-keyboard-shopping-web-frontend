export const getAllProductsApi = async () => {
  const response = await fetch('http://localhost:8070/api/allProducts/getAllProducts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};
