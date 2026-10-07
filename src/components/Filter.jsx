// Inputs to filter movies by title and minimum rating
function Filter({ title, rating, onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />

      <label>
        Min rating: <strong>{rating}</strong>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={rating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
