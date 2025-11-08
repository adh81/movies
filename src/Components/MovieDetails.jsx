import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockMovies } from "../Data/mockeData";

const MovieDetails = ({addToFavorites}) => {

  const { id } = useParams(); // گرفتن id از آدرس URL
  const navigate = useNavigate();

  // پیدا کردن فیلم مورد نظر از لیست mockMovies
  const movie = mockMovies.find((m) => m.id === Number(id));

  // اگر فیلم پیدا نشد
  if (!movie) {
    return <div className="text-center text-light mt-5">فیلم یافت نشد 😢</div>;
  }
  const handleAdd =()=>{addToFavorites(movie)}

  return (
    <div className="container py-5 text-light">
      <button className="btn btn-outline-light mb-4" onClick={() => navigate(-1)}>
        ← بازگشت
      </button>

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
          <p>سال تولید: {movie.year}</p>
          <p>⭐ امتیاز: {movie.rating}</p>
          <div className="mb-3">
            {movie.genre.map((g, i) => (
              <span key={i} className="badge bg-secondary me-1">{g}</span>
            ))}
          </div>
          <p>{movie.description}</p>

          <button className="btn btn-success mt-3" onClick={handleAdd}>
            افزودن به علاقه‌مندی‌ها ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;