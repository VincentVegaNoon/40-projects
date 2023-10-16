import { useEffect, useState } from "react";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  //   useEffect(() => {
  //     setBooks([]);
  //   }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setBooks([]);
    setHasMore(false);

    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const url = new URL("https://openlibrary.org/search.json");
        url.searchParams.append("q", query);
        url.searchParams.append("page", pageNumber);
        const response = await fetch(url.toString(), {
          signal: abortController.signal,
        });
        if (abortController.signal.aborted) {
          return;
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        const newBooks = jsonData.docs.map((b) => b.title);

        setBooks((prevBooks) => [...new Set([...prevBooks, ...newBooks])]);
        setHasMore(newBooks.length > 0);
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      abortController.abort();
    };
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}
