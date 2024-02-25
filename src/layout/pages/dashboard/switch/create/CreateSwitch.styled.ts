import styled from 'styled-components';

export const CreateSwitch = styled.section`
  border: 1px solid #d6d4c8;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
  width: 300px;

  .buttonMain {
    /* border: 1px solid red; */
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .createButton {
    margin-top: 10px;
    color: #2eff2e;
    background-color: #084298;
    border: none;
    border-radius: 4px;
    width: 40%;
    padding: 5px;
    margin-right: 20px;
    border: 1px solid #dedede;
  }

  .closeButton {
    margin-top: 10px;
    color: #2eff2e;
    background-color: #084298;
    border: none;
    border-radius: 4px;
    width: 40%;
    padding: 5px;
    border: 1px solid #dedede;
  }

  .inputMain {
    display: flex;
    flex-direction: column;
  }

  .input {
    padding: 2px 0px 2px 5px;
    border-radius: 4px;
    border: 1px solid #d6d4c8;
    margin-top: 10px;
  }

  .selectMain {
    /* border: 1px solid red; */
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .selectColor {
    text-align: center;
    width: 50%;
    padding: 2px 0px;
    border-radius: 4px;
    border: 1px solid #d6d4c8;
  }
`;
