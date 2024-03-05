import styled from 'styled-components';

export const ShowKeyboard = styled.section`
  border: 1px solid #dedede;
  border-radius: 5px;
  width: 200px;
  margin-top: 50px;

  .keyboardCard {
    margin-right: 20px;
  }

  .cardTitleMain {
    font-size: 15px;
    padding: 15px;
  }

  .keyboardCardImage {
    max-height: 200px;
    width: 200px;
    object-fit: scale-down;
  }

  .keyboardCardName {
  }

  .keyboardCardDesc {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .keyboardCardColor {
    margin-bottom: 5px;
  }

  .keyboardCardSwitch {
    margin-bottom: 20px;
  }

  .keyboardBtnMain {
    display: flex;
    justify-content: space-evenly;
  }

  .keyboardBtnSub {
    width: 200px;
    display: flex;
  }

  .keyboardUpdateBtn {
    width: 100%;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 4px;
  }

  .keyboardDeleteBtn {
    width: 100%;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 4px;
  }
`;
