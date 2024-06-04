export const getAllKeycapsApi = async () => {
  const response = await fetch('http://localhost:8070/api/keycap/getAllKeycaps', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};
