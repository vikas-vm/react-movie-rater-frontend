import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
const MovieList = (props) =>{
    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    };
    const editClicked = movie =>{
        props.editClicked(movie);
    };
    return(
        <div>
            <h2>Movie List</h2>
            {props.movies && props.movies.map(movie=>{
            return (
                <div key={movie.id}>
                  <h2 onClick={ movieClicked(movie)}>{movie.title}</h2>
                    <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)}/>
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            )
          })}
        </div>
    )
};
export default MovieList;