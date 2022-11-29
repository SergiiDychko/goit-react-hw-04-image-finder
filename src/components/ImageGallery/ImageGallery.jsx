import PropTypes from 'prop-types';
import { Component } from 'react';
import { Notify } from 'notiflix';

import { StyledImageGallery } from './ImageGalleryStyles';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal';
import Loader from '../Loader';
import Button from '../Button';
import { fetchImages } from '../../utils/fetchApi';

class ImageGallery extends Component {
  state = {
    imgStorage: [],
    modalImageIndex: 0,
    totalHits: '',
    page: 1,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({
        imgStorage: [],
        page: 1,
        loading: true,
      });
      fetchImages(this.props.query, this.props.page)
        .then(images =>
          this.setState({
            imgStorage: images.hits,
            totalHits: images.totalHits,
          })
        )
        .catch(error => console.log('Something went wrong'))
        .finally(() => this.setState({ loading: false }));
    }
    if (this.state.totalHits === 0) {
      Notify.info('Your query could not find anything');
      this.setState({ totalHits: '' });
    }

    if ((prevState.page !== this.state.page) & (this.state.page !== 1)) {
      this.setState({ loading: true });
      fetchImages(this.props.query, this.state.page)
        .then(images =>
          this.setState({
            imgStorage: [...this.state.imgStorage, ...images.hits],
          })
        )
        .catch(error => console.log('Something went wrong'))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleLoadMore = evt => {
    evt.preventDefault();
    this.setState({ page: this.state.page + 1 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  openModal = imageId => {
    const { imgStorage } = this.state;
    this.toggleModal();
    this.setState({
      modalImageIndex: imgStorage.findIndex(image => image.id === imageId),
    });
  };

  render() {
    const { imgStorage, showModal, modalImageIndex, loading, totalHits } =
      this.state;

    return (
      <>
        <StyledImageGallery className="gallery">
          {imgStorage.map(el => (
            <ImageGalleryItem
              key={el.id}
              item={el}
              openModal={this.openModal}
            />
          ))}
        </StyledImageGallery>
        {loading && <Loader />}
        {imgStorage.length > 0 && imgStorage.length < totalHits && (
          <Button onClick={this.handleLoadMore}>Load More</Button>
        )}
        {showModal && (
          <Modal
            gallery={imgStorage}
            index={modalImageIndex}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
