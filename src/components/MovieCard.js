import './styles/MovieCard.scss';

const MovieCard = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
  readAboutMovie
}) => {
  const readMoreHandler = (e) => {
    e.preventDefault();
    readAboutMovie(imdbID);
  };

  return (
    <div className='card'>
      <div className='cardPoster'>
        {Poster !== 'N/A' ? (
          <img
            src={Poster}
            alt='Movie poster'
            width='250px' />
        ) : (
          <img
            src={`https://via.placeholder.com/300x430.png?text=${Title}`}
            alt='Movie poster'
            width='250px' />
        )}
      </div>
      <div className='cardDescription'>
        <span>{Title}</span>
        <p>
          <span>{Year}, {Type}</span>
          <a href='#' onClick={readMoreHandler}>
            Read more
          </a>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;