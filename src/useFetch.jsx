import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Something went wrong!");
        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setData(null);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => controller.abort(); // Cleanup function
  }, [url]);

  return { data, isLoading, error };
}
