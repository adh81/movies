import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ addToFavorites, removeFromFavorites, favorites }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // آیا این فیلم در علاقه‌مندی‌ها هست؟
  const isFavorite = favorites.some((fav) => fav.id === Number(id));

  // ======================================
  // گرفتن اطلاعات فیلم از TMDB
  // ======================================
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=fa`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log("خطا در دریافت جزئیات فیلم", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-center text-light mt-5">در حال بارگذاری...</div>;

  return (
    <div className="container py-5 text-light">
      <div className="row">

        {/* تصویر فیلم */}
        <div className="col-md-4">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* اطلاعات فیلم */}
        <div className="col-md-8">
          <h2>{movie.title}</h2>

          <p className="text-warning">★ امتیاز: {movie.vote_average}</p>

          <p className="mt-3">{movie.overview || "بدون توضیحات"}</p>

          <p className="mt-3">
            <strong>سال انتشار:</strong>{" "}
            {movie.release_date ? movie.release_date.split("-")[0] : "---"}
          </p>

          <p>
            <strong>ژانرها:</strong>{" "}
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map((g) => g.name).join("، ")
              : "ندارد"}
          </p>

          {/* دکمه علاقه‌مندی */}
          {!isFavorite ? (
            <button
              className="btn btn-success mt-3"
              onClick={() => addToFavorites(movie)}
            >
              افزودن به علاقه‌مندی‌ها ❤️
            </button>
          ) : (
            <button
              className="btn btn-danger mt-3"
              onClick={() => removeFromFavorites(movie.id)}
            >
              حذف از علاقه‌مندی‌ها 💔
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;