
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {

  // جلوگیری از خطا (movies اگر undefined بود)
  if (!movies || movies.length === 0) {
    return (
      <div className="container py-4">
        <div className="text-center py-5">
          <h5>فیلمی یافت نشد 😢</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-6 col-lg-4 mb-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;