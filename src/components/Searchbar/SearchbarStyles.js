import styled from 'styled-components';

export const StyledSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: rgba(60, 80, 180, 0.5);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .searchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }

  .searchForm-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68px;
    height: 48px;
    border: none;
    background-color: rgba(60, 80, 180, 0.3);
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  .btnIcon {
    width: 25px;
    height: 25px;
    fill: #3f51b5;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .searchForm-button:hover {
    opacity: 1;
  }

  .searchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 14px;
    padding-right: 14px;
  }

  .searchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
