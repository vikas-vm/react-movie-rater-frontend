import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([null]);
  useEffect(() =>{
    fetch('http://127.0.0.1:8000/api/movie/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token e9f700dfc42250606962cf9c1fc26cbcf02eb710'
      }
    })
        .then(resp => resp.json())
        .then(resp => setMovies(resp))
        .catch(error => console.log(error))
  },[]);
    const movieClicked = movie => {
        setSelectedMovie(movie);
    };
  return (
    <div className="App">
      <div className="layout">
        <MovieList movies={movies} movieClicked={movieClicked}/>
        <MovieDetails movie={selectedMovie}/>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
