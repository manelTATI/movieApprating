import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";

// Some starting movies so the page isn't empty
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description:
      "Dom Cobb is a thief who steals secrets from people's dreams. He gets one last job that could give him his old life back: instead of stealing an idea, he has to plant one in someone's mind.",
    posterURL: "https://picsum.photos/seed/inception/300/450",
    rating: 9,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Lion King",
    description:
      "Simba is a young lion prince. After his father dies, his uncle Scar takes the throne and Simba runs away. Years later he has to come back and take his place as king.",
    posterURL: "https://picsum.photos/seed/lionking/300/450",
    rating: 8,
    trailerLink: "https://www.youtube.com/embed/7TavVZMewpY",
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "Earth is running out of food. A former pilot and a team of scientists fly through a wormhole near Saturn to look for a new planet where people can live.",
    posterURL: "https://picsum.photos/seed/interstellar/300/450",
    rating: 8.5,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 4,
    title: "Finding Nemo",
    description:
      "Nemo, a young clownfish, is caught by a diver and taken to a fish tank in Sydney. His nervous father Marlin crosses the ocean to find him, with the forgetful Dory by his side.",
    posterURL: "https://picsum.photos/seed/nemo/300/450",
    rating: 7.5,
    trailerLink: "https://www.youtube.com/embed/wZdpNglLbt8",
  },
];

function App() {
  // The movies live here so every page can see them,
  // including movies added with the form
  const [movies, setMovies] = useState(initialMovies);

  // The filters also live here, so they are still set
  // when you come back from a movie page
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  // Add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>🎬 My Movie App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              titleFilter={titleFilter}
              ratingFilter={ratingFilter}
              setTitleFilter={setTitleFilter}
              setRatingFilter={setRatingFilter}
              addMovie={addMovie}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
