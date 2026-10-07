import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";

// Some starting movies so the page isn't empty
const initialMovies = [
  {
    title: "Inception",
    description: "A thief who steals secrets through dreams is given one last job.",
    posterURL: "https://picsum.photos/seed/inception/300/450",
    rating: 9,
  },
  {
    title: "The Lion King",
    description: "A young lion prince must reclaim his place as king.",
    posterURL: "https://picsum.photos/seed/lionking/300/450",
    rating: 8,
  },
  {
    title: "Interstellar",
    description: "Explorers travel through a wormhole to save humanity.",
    posterURL: "https://picsum.photos/seed/interstellar/300/450",
    rating: 8.5,
  },
  {
    title: "Finding Nemo",
    description: "A clownfish searches the ocean for his lost son.",
    posterURL: "https://picsum.photos/seed/nemo/300/450",
    rating: 7.5,
  },
];

function App() {
  // State: the list of movies
  const [movies, setMovies] = useState(initialMovies);

  // State: the filter values
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  // Add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Keep only the movies that match both filters
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>🎬 My Movie App</h1>

      <Filter
        title={titleFilter}
        rating={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />

      <AddMovieForm onAdd={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
