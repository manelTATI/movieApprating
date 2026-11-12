import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovieForm from "../components/AddMovieForm";

// The home page: filter, add-movie form and the list of movies
function Home({
  movies,
  titleFilter,
  ratingFilter,
  setTitleFilter,
  setRatingFilter,
  addMovie,
}) {
  // Keep only the movies that match both filters
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <>
      <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <AddMovieForm onAdd={addMovie} />

      <MovieList movies={filteredMovies} />
    </>
  );
}

export default Home;
