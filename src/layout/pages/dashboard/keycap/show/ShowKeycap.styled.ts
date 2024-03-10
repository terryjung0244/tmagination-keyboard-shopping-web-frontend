import styled from 'styled-components';

export const ShowKeycap = styled.section`
  border: 1px solid #dedede;
  margin-left: 20px;
  border-radius: 5px;
  width: 200px;
  margin-top: 50px;

  .keycapCard {
    margin-right: 20px;
  }

  .cardTitleMain {
    font-size: 15px;
    padding: 15px;
  }

  .keycapCardImage {
    max-height: 200px;
    width: 200px;
    object-fit: scale-down;
  }

  .keycapCardName {
  }

  .keycapCardDesc {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .keycapCardColor {
    margin-bottom: 20px;
  }

  .keycapCardSwitch {
    margin-bottom: 20px;
  }

  .keycapBtnMain {
    display: flex;
    justify-content: space-evenly;
  }

  .keycapBtnSub {
    width: 200px;
    display: flex;
  }

  .keycapUpdateBtn {
    width: 100%;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 5px;
  }

  .keycapDeleteBtn {
    width: 100%;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 5px;
  }
`;
