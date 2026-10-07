// Shows one movie
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span className="rating">⭐ {movie.rating} / 10</span>
      </div>
    </div>
  );
}

export default MovieCard;
