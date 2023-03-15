import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./movies";

const API_URL = "http://www.omdbapi.com?apikey=36b18a3c";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies =  async(title) => {
    const result = await fetch(`${API_URL}&s=${title}`);
    const data = await result.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies("Avengers");
  },[])
  return (
    <div className="app">
      <h1>Movies land</h1>
      <div className="search">
        <input 
        value={searchTerm}
        onClick={(e)=> setSearchTerm(e.target.value)}
        placeholder="search for movies" 
        />
        <img 
        src={SearchIcon}
         alt="search" 
         onClick={() => searchMovies(searchTerm)}
          />
              {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      </div>

    </div>
  )
}
export default App;