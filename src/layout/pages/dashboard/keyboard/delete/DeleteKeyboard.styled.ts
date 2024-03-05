import styled from 'styled-components';

export const DeleteKeyboard = styled.section`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  .messageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btnMain {
    /* border: 1px solid red; */
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .keyboardDeleteBtn {
    width: 100px;
    border-radius: 5px;
    background-color: #084298;
    color: #2eff2e;
    padding: 4px;
  }
`;
