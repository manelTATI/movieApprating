import MovieCard from "./MovieCard";

// Shows all the movies it receives as cards
function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="empty">No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
