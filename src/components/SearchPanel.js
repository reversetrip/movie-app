import React, { useState } from 'react';
import './styles/SearchPanel.scss';

const SearchPanel = ({ searchMovies }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const onEnterHandler = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
      setSearch('');
    }
  };

  const typeFilterHandler = (e) => {
    setType(e.target.value);
  };

  return (
    <div className='searchPanel'>
      <div className='movieSearch'>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyUp={onEnterHandler}
          placeholder='Movie to search for...' />
        <button
          onClick={() => { searchMovies(search, type); setSearch('') }}>
          search
        </button>
      </div>
      <div  className='movieType'>
        <label>
          <input
            type='radio'
            name='type'
            value='all'
            checked={type === 'all'}
            onChange={typeFilterHandler} />
          <span>All</span>
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='movie'
            checked={type === 'movie'}
            onChange={typeFilterHandler} />
          <span>Movies only</span>
        </label>
        <label>
          <input
            type='radio'
            name='type'
            value='series'
            checked={type === 'series'}
            onChange={typeFilterHandler} />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export default SearchPanel;