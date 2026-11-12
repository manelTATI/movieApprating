import { Link } from "react-router-dom";

// Shows one movie. Clicking anywhere on the card opens its page.
function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span className="rating">⭐ {movie.rating} / 10</span>
      </div>
    </Link>
  );
}

export default MovieCard;
