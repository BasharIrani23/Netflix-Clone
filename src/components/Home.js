import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

export default function Home() {
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=b479e5215ddddd25cb76e4840a3056b7`
      );

      setResults(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <MovieList results={results} />;
}
