import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const MovieDetails = (props) =>{
    const mov = props.movie;
    return(
        <div>
            {mov ? (
                <div>
                    <h1>{props.movie && props.movie.title}</h1>
                    <p>{props.movie && props.movie.description}</p>
                    <p>{props.movie.no_of_rating}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? 'orange':''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? 'orange':''}/>
                </div>
            ) : null}
        </div>

)
};
export default MovieDetails;
