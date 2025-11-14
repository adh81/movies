import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [message, setMessage] = useState("");

  // ============================
  // 1) دریافت فیلم‌های محبوب از TMDB
  // ============================
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=fa&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log("خطا در دریافت فیلم‌ها", error);
      }
    };

    fetchMovies();
  }, []);

  // ============================
  // 2) سرچ فیلم از API
  // ============================
  const handleSearch = async (term) => {
    if (term.trim() === "") {
      // وقتی ورودی خالی شد دوباره محبوب‌ها را بیا
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=fa&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
      return;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${process.env.REACT_APP_TMDB_KEY}&language=fa`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  // ============================
  // 3) افزودن به علاقه‌مندی‌ها
  // ============================
  const addToFavorites = (movie) => {
    const exists = favorites.some((m) => m.id === movie.id);
    if (!exists) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));

      setMessage("به علاقمندی‌ها اضافه شد");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  // ============================
  // 4) حذف از علاقه‌مندی‌ها
  // ============================
  const removeFromFavorites = (id) => {
    const updated = favorites.filter((m) => m.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));

    setMessage("از علاقمندی‌ها حذف شد");
    setTimeout(() => setMessage(""), 2000);
  };

  // ============================
  // 5) خروجی
  // ============================
  return (
    <Router>
      <Navbar onSearch={handleSearch} />

      {message && (
        <div
          className="alert alert-success text-center mt-2"
          style={{
            position: "fixed",
            top: "10px",
            left: 0,
            right: 0,
            zIndex: 2000,
          }}
        >
          {message}
        </div>
      )}

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />

        <Route
          path="/movie/:id"
          element={
            <MovieDetails
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              favorites={favorites}
            />
          }
        />

        <Route path="/favorites" element={<MovieList movies={favorites} />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;