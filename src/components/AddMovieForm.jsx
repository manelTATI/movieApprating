import { useState } from "react";

// A form to add a new movie
function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    if (!title || !rating) {
      alert("Please enter at least a title and a rating.");
      return;
    }

    onAdd({
      title,
      description,
      posterURL: posterURL || "https://picsum.photos/300/450",
      rating: Number(rating),
    });

    // Clear the form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (0-10)"
        min="0"
        max="10"
        step="0.5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
