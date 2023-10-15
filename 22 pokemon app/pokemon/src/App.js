import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import { func } from "prop-types";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();
    fetch(currentPageUrl, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setPokemon(data.results.map((p) => p.name));
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
    </>
  );
}

export default App;
