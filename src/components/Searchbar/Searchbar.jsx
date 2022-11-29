import PropTypes from 'prop-types';
import { StyledSearchbar } from './SearchbarStyles';
import { ReactComponent as Search } from '../../icons/search.svg';
import { Component } from 'react';
import { Notify } from 'notiflix';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = evt => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  handleSearchSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return Notify.info('Sorry, Please enter a more specific query');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <form className="searchForm" onSubmit={this.handleSearchSubmit}>
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
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
