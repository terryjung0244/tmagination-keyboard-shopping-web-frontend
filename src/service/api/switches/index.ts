export const getAllSwitchesAPI = async () => {
  const response = await fetch('http://localhost:8070/api/switch/getAllSwitches', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};
