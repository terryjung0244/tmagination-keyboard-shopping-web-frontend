import styled from 'styled-components';

export const UpdateSwitch = styled.section`
  .inputMain {
    /* border: 1px solid red; */
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    min-width: 200px;
    max-width: 300px;
  }
  .switchName {
    margin-bottom: 10px;

    .titleName {
      margin-right: 5px;
    }

    .inputName {
      width: 100%;
      padding-left: 5px;
    }
  }

  .selectInput {
    margin-top: 10px;
    padding: 2px 5px;
  }

  .switchImageMain {
    display: flex;
    justify-content: center;

    .switchImageUrl {
      width: 150px;
      object-fit: scale-down;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .switchBtnMain {
    display: flex;
    justify-content: center;
  }
  .switchBtnSub {
    width: 200px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .switchUpdateBtn {
    width: 150px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 2px;
  }

  .switchDeleteBtn {
    width: 150px;

    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 2px;
  }
`;
