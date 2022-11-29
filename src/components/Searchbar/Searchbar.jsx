import PropTypes from 'prop-types';
import { StyledSearchbar } from './SearchbarStyles';
import { ReactComponent as Search } from '../../icons/search.svg';
import { useState } from 'react';
import { Notify } from 'notiflix';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => setQuery(evt.target.value.toLowerCase());

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      return Notify.info('Sorry, Please enter a more specific query');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearchbar>
      <form className="searchForm" onSubmit={handleSearchSubmit}>
        <button type="submit" className="searchForm-button">
          <Search className="btnIcon" />
        </button>

        <input
          className="searchForm-input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}