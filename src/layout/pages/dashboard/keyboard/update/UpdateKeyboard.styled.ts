import styled from 'styled-components';

export const UpdateKeyboard = styled.section`
  .inputMain {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 300px;
  }
  .switchName {
    margin-bottom: 10px;

    .titleName {
      margin-right: 5px;
    }
  }

  .inputName {
    width: 100%;
    padding-left: 5px;
  }

  .selectInput {
    margin-top: 10px;
    padding: 2px 5px;
  }

  .keyboardImageMain {
    display: flex;
    justify-content: center;

    .keyboardImageUrl {
      width: 150px;
      object-fit: scale-down;
      margin-top: 20px;
    }
  }

  .keyboardBtnMain {
    display: flex;
    justify-content: center;
  }
  .keyboardBtnSub {
    width: 200px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .keyboardUpdateBtn {
    width: 150px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 2px;
  }

  .keyboardDeleteBtn {
    width: 150px;

    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 2px;
  }
`;
