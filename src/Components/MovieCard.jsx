import React from "react";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

  const handleDetails =()=>{
    navigate(`/movie/${movie.id}`)
  };

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={movie.img} 
        className="card-img-top"
        alt={movie.title}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="text-muted small">کارگردان: {movie.director}</p>
        <div className="mb-2">
          {movie.genre.map((genre, index) => (
            <span key={index} className="badge bg-secondary me-1 mb-1">
              {genre}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-warning">★ {movie.rating}</span>
            <span className="text-muted">{movie.year}</span>
          </div>
          <button className="btn btn-primary btn-sm w-100" onClick={handleDetails}>
            مشاهده جزئیات
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
