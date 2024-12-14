export const fetchData = async (endpoint) => {
  const response = await fetch(`http://localhost:3001/${endpoint}`);
  return response.json();
};
