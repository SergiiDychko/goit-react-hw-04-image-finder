import PropTypes from 'prop-types';
import axios from 'axios';

export const fetchImages = async (query, page = 1) => {
  const images = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=30849691-d4b4d8699eb6bab45d758087e&image_type=photo&orientation=horizontal&per_page=12`
  );

  return images.data;
};

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};