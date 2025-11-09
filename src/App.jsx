import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import { mockMovies } from "./Data/mockeData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState(mockMovies);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [message, setMessage] = useState("");

  // تابع جستجو
  const handleSearch = (term) => {
    if (term.trim() === "") {
      setMovies(mockMovies);
    } else {
      const filtered = mockMovies.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setMovies(filtered);
    }
  };

  //  افزودن به علاقه‌مندی‌ها
  const addToFavorites = (movie) => {
    const isExist = favorites.some((fav) => fav.id === movie.id);
    if (!isExist) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setMessage(`${movie.title}اضافه شد `);
      setTimeout(() => setMessage(""), 3000)
    }
  };

  //  حذف از علاقه‌مندی‌ها
  const removeFromFavorites = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  //  بخش نمایش JSX (در سطح App)
  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      {message && (
        <div
          className="alert alert-success text-center mt-2"
          style={{ position: "fixed", top: "10px", left: 0, right: 0, zIndex: 1000 }}
        >
          {message}
        </div>
      )}
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetails addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites}
          favorites={favorites} />}
        />
        <Route
          path="/favorites"
          element={<MovieList movies={favorites} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;