import PropTypes from 'prop-types';
import { StyledImageGalleryItem } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ item, openModal }) => {
const { webformatURL, id, tags } = item;

  return (
    <StyledImageGalleryItem>
      <img
        className="imageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(id)}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;