import {Link} from 'react-router-dom'
import "./MovieListing.css";

export default function MovieListing({ show: {id, title, listedIn, description, duration} }) {
  return (
    <article className="movie">
      <h3 className="title">
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p className="description">{description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {listedIn}
        </p>
        <p>
          <span>Duration:</span> {duration}
        </p>
      </aside>
    </article>
  );
}