import MovieCard from './MovieCard';
import './styles/MoviesContainer.scss';

const MoviesContainer = ({ movies, readAboutMovie }) => {
  return (
    <div className='moviesContainer'>
      {!movies.length ? (
        <h2 className='notFound'>
          NOTHING FOUND
        </h2>
      )
        : movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            readAboutMovie={readAboutMovie}
            {...movie} />
        ))}
    </div>
  );
};

export default MoviesContainer;