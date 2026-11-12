import { Link } from "react-router-dom";

// Shown when the URL doesn't match any page
function NotFound() {
  return (
    <div className="details not-found">
      <h2>Page not found</h2>
      <p>This page doesn't exist.</p>
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
