import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
    const  { movieId } = useParams();
    const movieIndex = parseInt(movieId);

    console.log(movieIndex);
    //console.log(movies[movieIndex].title);

    return (
      <div>
        <span>movie Id: {movieIndex}</span>
      </div>
    );
  }
  
  export default MovieShow;