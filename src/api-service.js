export class API {
    static updateMovie(mov_id, body){
        return fetch(`http://127.0.0.1:8000/api/movie/${mov_id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
                body: JSON.stringify(body)
        })
            .then(r => r.json())
    }
}