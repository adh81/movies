import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100 shadow-sm bg-dark text-light">

      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        className="card-img-top"
        alt={movie.title}
        style={{ height: "350px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>

        {/* توضیحات کوتاه */}
        <p className="text-muted small" style={{ color: "#ccc" }}>
          {movie.overview
            ? movie.overview.slice(0, 80) + "..."
            : "بدون توضیحات"}
        </p>

        <div className="mt-auto">
          {/* امتیاز و سال ساخت */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-warning">★ {movie.vote_average}</span>

            <span className="text-muted">
              {movie.release_date
                ? movie.release_date.split("-")[0]
                : "-----"}
            </span>
          </div>

          {/* دکمه جزئیات */}
          <Link
            to={`/movie/${movie.id}`}
            className="btn btn-primary btn-sm w-100"
          >
            مشاهده جزئیات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;