import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const MovieDetails = (props) =>{
    const mov = props.movie;
    const [highLighted, setHighLighted] = useState(-1);
    const highLightRate = high => evt => {
        setHighLighted(high)
    };
    const rateClicked = rate => evt =>{
        fetch(`http://127.0.0.1:8000/api/movie/${mov.id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token e9f700dfc42250606962cf9c1fc26cbcf02eb710'
      },
            body: JSON.stringify({stars:rate+1})
    })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    };
    return(
        <React.Fragment>
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
                    <div className={'rating-box'}>
                        <h1>Rate it</h1>
                        {
                            [...Array(5)].map((e, i) => {
                                return <FontAwesomeIcon key={i} icon={faStar} className={highLighted > i - 1 ? 'purple':''}
                                                        onMouseEnter={highLightRate(i)} onMouseLeave={highLightRate(-1)}
                                onClick={rateClicked(i)}/>
                            })
                        }
                    </div>
                </div>
            ) : null}
        </React.Fragment>

)
};
export default MovieDetails;
