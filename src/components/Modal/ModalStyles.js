import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  .modal {
    position: relative;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
  .modalBtnsWrap {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 50%;
    transform: translate(0, 50%);
    display: flex;
    justify-content: space-between;
  }
  .modalBtn {
    padding: 40px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .btnIcon {
    fill: rgba(0, 0, 0, 0.3);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn:hover .btnIcon {
    fill: rgba(255, 255, 255, 0.3);
  }
`;