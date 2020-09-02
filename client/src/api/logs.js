export const getLogs = async (filters) => {
  const queryParams = filters.map((filter) => `level=${filter}`).join("&");
  const response = await fetch(`/api/logs?${queryParams}`);
  const logs = await response.json();
  return logs;
};
