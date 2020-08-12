import React from "react";
const MovieList = (props) =>{
    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    };
    return(
        <div>
            <h2>Movie List</h2>
            {props.movies && props.movies.map(movie=>{
            return (
                <div key={movie.id}>
                  <h2 onClick={ movieClicked(movie)}>{movie.title}</h2>
                </div>
            )
          })}
        </div>
    )
};
export default MovieList;