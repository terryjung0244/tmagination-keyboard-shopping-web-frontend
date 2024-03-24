import styled from 'styled-components';

export const SortBox = styled.section`
  /* border: 1px solid red; */
  margin-bottom: 30px;
  padding-bottom: 30px;
  display: flex;
  border-bottom: 2px solid #dedede;

  .sortByText {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 600;
    margin-right: 20px;
  }

  .selectBoxContainer {
    /* border: 1px solid red; */
    position: relative;

    .selectBox {
      /* background: transparent; */
      border: 0 none;
      position: relative;
      appearance: none;
      font-size: 25px;
      z-index: 3; // select가 위로 올라와야 함
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
        width: 80%;
        transition: 0.3s; // 부드럽게 회전
      }
    }
  }

  .selectBoxContainer .selectBox:focus + .downArrowContainer img {
    transform: rotate(180deg);
  }
`;
