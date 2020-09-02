export const getLogs = async () => {
  const response = await fetch("/api/logs");
  const logs = await response.json();
  return logs;
};
