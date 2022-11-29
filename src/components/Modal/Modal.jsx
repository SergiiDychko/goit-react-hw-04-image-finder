import PropTypes from 'prop-types';
import { StyledModal } from './ModalStyles';
import { ReactComponent as Prev } from '../../icons/chevronleft.svg';
import { ReactComponent as Next } from '../../icons/chevronright.svg';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ index, gallery, onClose }) {
  const [imageIndex, setImageIndex] = useState(index);
  const { tags, largeImageURL } = gallery[imageIndex];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextPage = () =>
    setImageIndex(imageIndex === gallery.length - 1 ? 0 : imageIndex + 1);

  const prevPage = () =>
    setImageIndex(imageIndex === 0 ? gallery.length - 1 : imageIndex - 1);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
    if (e.code === 'ArrowRight') {
      nextPage();
    }
    if (e.code === 'ArrowLeft') {
      prevPage();
    }
  };

  return createPortal(
    <StyledModal onClick={handleBackdropClose}>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
        <div className="modalBtnsWrap">
          <button className="modalBtn" type="button" onClick={prevPage}>
            <Prev className="btnIcon" />
          </button>
          <button className="modalBtn" type="button" onClick={nextPage}>
            <Next className="btnIcon" />
          </button>
        </div>
      </div>
    </StyledModal>,
    modalRoot
  );
}

Modal.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
