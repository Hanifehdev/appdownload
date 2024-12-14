export const fetchData = async (endpoint) => {
  const response = await fetch(`${process.env.API_URL}/${endpoint}`);
  return response.json();
};
