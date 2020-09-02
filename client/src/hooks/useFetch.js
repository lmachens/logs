const { useState, useEffect } = require("react");

const useAsync = (asyncFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doCall = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        const newData = await asyncFunc();
        setData(newData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    doCall();
  }, [asyncFunc]);

  return { data, loading, error };
};

export default useAsync;
