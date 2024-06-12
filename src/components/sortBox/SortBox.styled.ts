import styled from 'styled-components';
import { colors, fontSize } from '../../GlobalStyles';

export const SortBox = styled.section`
  /* border: 1px solid red; */
  font-size: ${fontSize.md};
  margin-bottom: 30px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  color: ${colors.fontMainColor};
  border-bottom: 2px solid #dedede;

  .sortByText {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-right: 20px;
  }

  .selectBoxContainer {
    position: relative;

    .selectBox {
      border: 1px solid red;
      padding-left: 15px;
      width: 150px;
      background: transparent;
      border: 0 none;
      position: relative;
      appearance: none;
      color: ${colors.fontMainColor};
      z-index: 3; // select가 위로 올라와야 함

      .selectBox:focus {
        border: none;
      }

      & option {
        background-color: #11182a;
      }
    }

    .downArrowContainer {
      /* border: 1px solid red; */
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 35px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .downArrowImage {
        width: 70%;
        transition: 0.3s;
        filter: invert(87%) sepia(79%) saturate(1146%) hue-rotate(44deg) brightness(101%)
          contrast(104%);
      }
    }
  }

  .selectBoxContainer .selectBox:focus + .downArrowContainer img {
    transform: rotate(180deg);
  }

  .deleteAllProductsBtn {
    /* border: 1px solid red; */
    padding: 0 15px 0 15px;
    border-radius: 5px;
    background-color: #2c3c6b;
    cursor: pointer;
  }
`;
