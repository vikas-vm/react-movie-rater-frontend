import React, {useState} from "react";
import {API} from '../api-service';

function MovieForm(props) {
    const mov = props.movie;
    const [title, setTitle] = useState(mov.title);
    const [description, setDescription] = useState(mov.description);
    const UpdateClicked = () =>{
        console.log("clicked");
        API.updateMovie(mov.id, {title, description})
            .then(r => props.updateMovie(r))
            .catch(error => console.log(error))
    };
    return(
        <React.Fragment>
            {mov ? (
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" onChange={evt => setTitle(evt.target.value)} id={"title"} value={title} placeholder={"title"}/><br/>
                    
                    <label htmlFor="description">Description</label><br/>
                    <textarea name="description" onChange={evt => setDescription(evt.target.value)} id="description" value={description}/><br/>
                    <input type="submit" onClick={evt => UpdateClicked()}/>
                </div>

            ) : null}
        </React.Fragment>
    )
}
export default MovieForm;