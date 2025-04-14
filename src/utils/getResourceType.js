export const getResourceType = (apiUrl) => {
  const match = apiUrl.match(/\/api\/(\w+)\//);
  return match ? match[1] : null;
};