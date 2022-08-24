import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchPanel from '../components/SearchPanel';
import MovieAbout from '../components/MovieAbout';
import MoviesContainer from '../components/MoviesContainer';
import './styles/Main.scss';

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [display, setDisplay] = useState('search');

  useEffect(() => {
    async function fetchMoviesData() {
      try {
        const requestURL = 'https://www.omdbapi.com/?apikey=254a10e6&s=black';
        const response = await axios.get(requestURL);

        const list = response.data.Search ? response.data.Search : [];
        setIsLoaded(true);
        setMovies(list);

      } catch (e) {
        setIsLoaded(true);
        setError(e);
      }
    }

    fetchMoviesData();
  }, []);

  async function searchMovies(search, type) {
    if (search.trim() === '') return;
    setIsLoaded(false);
    setError(null);
    setDisplay('search');

    try {
      let searchURL = `https://www.omdbapi.com/?apikey=254a10e6&s=${search}`;
      if (type !== 'all') searchURL = searchURL + `&type=${type}`;
      const response = await axios.get(searchURL);

      const list = response.data.Search ? response.data.Search : [];
      setIsLoaded(true);
      setMovies(list);

    } catch (e) {
      setIsLoaded(true);
      setError(e);
    }
  };

  async function readAboutMovie(id) {
    setIsLoaded(false);
    setDisplay('movie');

    try {
      const movieURL = `https://www.omdbapi.com/?apikey=254a10e6&i=${id}&plot=full`;
      const response = await axios.get(movieURL);

      const movie = response.data ? response.data : {};
      setIsLoaded(true);
      setMovie(movie);

    } catch (e) {
      setIsLoaded(true);
      setError(e);
    }
  };

  const goBack = () => setDisplay('search');

  return (
    <main className='main'>
      <SearchPanel searchMovies={searchMovies} />
      {
        !isLoaded ? <div className='loader'><p>LOADING...</p></div>
          : error ? <div className='errorMsg'><p>SOMETHING WENT WRONG</p></div>
            : display === 'movie' ? <MovieAbout goBack={goBack} {...movie} />
              : <MoviesContainer
                movies={movies}
                readAboutMovie={readAboutMovie} />
      }
    </main>
  );
};

export default Main;