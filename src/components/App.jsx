import { Component } from 'react';
import './App.css';
import { fetchImages, fetchMoreImages } from '../utils/fetchApi';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar/';

class App extends Component {
  state = {
    query: '',
  };

  handleSearchFormSubmit = query => {
    this.setState({ query });
  }


  render() {
    const { onSubmit, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <div className="container">
          <ImageGallery query={this.state.query} />
        </div>
      </>
    );
  }
}

export default App;
