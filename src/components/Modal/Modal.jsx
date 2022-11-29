import PropTypes from 'prop-types';
import { StyledModal } from './ModalStyles';
import { ReactComponent as Prev } from '../../icons/chevronleft.svg';
import { ReactComponent as Next } from '../../icons/chevronright.svg';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

  state = {
    imageIndex: this.props.index,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
    if (e.code === 'ArrowRight') {
      this.nextPage();
    }
    if (e.code === 'ArrowLeft') {
      this.prevPage();
    }
  };

  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  nextPage = () => {
    const { imageIndex } = this.state;
    const { gallery } = this.props;
    this.setState({
      imageIndex: imageIndex === gallery.length - 1 ? 0 : imageIndex + 1,
    });
  };
  prevPage = () => {
        const { imageIndex } = this.state;
        const { gallery } = this.props;
        this.setState({
          imageIndex: imageIndex === 0 ? gallery.length - 1 : imageIndex - 1,
        });
  };

  render() {
    const { imageIndex } = this.state;
    const { gallery } = this.props;
    const { tags, largeImageURL } = gallery[imageIndex];

    return createPortal(
      <StyledModal onClick={this.handleBackdropClose}>
        <div className="modal">
          <img src={largeImageURL} alt={tags} />
          <div className="modalBtnsWrap">
            <button className="modalBtn" type="button" onClick={this.prevPage}>
              <Prev className="btnIcon" />
            </button>
            <button className="modalBtn" type="button" onClick={this.nextPage}>
              <Next className="btnIcon" />
            </button>
          </div>
        </div>
      </StyledModal>,
      modalRoot
    );
  }
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

export default Modal;
