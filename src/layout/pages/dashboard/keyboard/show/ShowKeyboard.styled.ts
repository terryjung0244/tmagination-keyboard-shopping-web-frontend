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
    /* border: 1px solid red; */
    padding: 15px;
  }

  .keyboardCardImage {
    /* border: 1px solid #dedede; */
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
    /* border: 1px solid red; */
    margin-bottom: 20px;
  }

  .keyboardBtnMain {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-evenly;
  }

  .keyboardUpdateBtn {
    width: 100%;
    margin-bottom: 2px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
  }
`;
