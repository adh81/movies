import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockMovies } from "../Data/mockeData";

const MovieDetails = ({ addToFavorites, removeFromFavorites, favorites }) => {
  const { id } = useParams();
  const movie = mockMovies.find((m) => m.id === Number(id));

  if (!movie) return <div className="text-light text-center mt-5">فیلم یافت نشد</div>;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
      alert(`${movie.title} از علاقه‌مندی‌ها حذف شد ❌`);
    } else {
      addToFavorites(movie);
      alert(`${movie.title} به علاقه‌مندی‌ها اضافه شد ❤️`);
    }
  };

  return (
    <div className="container py-5 text-light">
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p className="text-muted">کارگردان: {movie.director}</p>
          <p>{movie.description}</p>
          <button
            className={`btn ${isFavorite ? "btn-danger" : "btn-success"} mt-3`}
            onClick={handleClick}
          >
            {isFavorite ? "حذف از علاقه‌مندی‌ها ❌" : "افزودن به علاقه‌مندی‌ها ❤️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;