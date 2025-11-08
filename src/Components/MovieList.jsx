
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="container py-4">
      <div className="row">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="col-md-6 col-lg-4 mb-4">
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5>فیلمی یافت نشد 😢</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
