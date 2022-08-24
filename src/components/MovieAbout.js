import './styles/MovieAbout.scss';

const MovieAbout = ({
  Title,
  Year,
  Runtime,
  Genre,
  Director,
  Actors,
  Plot,
  Poster,
  goBack
}) => {
  return (
    <div className='movieAbout'>
      {!Title ? <div><h2>Movie not found</h2></div>
        : (
          <>
            <div className='title'>
              <h2>{Title}</h2>
            </div>
            <div>
              {Poster !== 'N/A' ? (
                <img src={Poster} alt='Movie poster' />
              ) : <img
                src={`https://via.placeholder.com/300x430.png?text=${Title}`}
                alt='Movie poster'
              />}
            </div>
            <div className='description'>
              <ul>
                <li>Year: {Year}</li>
                <li>Director: {Director}</li>
                <li>Genre: {Genre}</li>
                <li>Runtime: {Runtime}</li>
                <li>Actors: {Actors}</li>
              </ul>
              <p>{Plot}</p>
              <button onClick={goBack}>BACK</button>
            </div>
          </>
        )}
    </div>
  );
};

export default MovieAbout;