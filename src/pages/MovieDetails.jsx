import { useParams, Link } from "react-router-dom";

// Shows everything about one movie, with its trailer
function MovieDetails({ movies }) {
  // The id comes from the URL, e.g. /movie/3 gives "3"
  const { id } = useParams();

  // The id in the URL is a string, so compare it as a string
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return (
      <div className="details not-found">
        <h2>Movie not found 😕</h2>
        <p>We couldn't find a movie with this id.</p>
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="details">
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>

      <div className="details-top">
        <img src={movie.posterURL} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <span className="rating">⭐ {movie.rating} / 10</span>
          <p>{movie.description}</p>
        </div>
      </div>

      {movie.trailerLink ? (
        <div className="trailer">
          <iframe
            src={movie.trailerLink}
            title={`${movie.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="empty">No trailer for this movie yet.</p>
      )}
    </div>
  );
}

export default MovieDetails;
