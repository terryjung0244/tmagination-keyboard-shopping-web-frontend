import styled from 'styled-components';

export const AllProductsIndex = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .deleteAllProducts {
    /* border: 1px solid red; */
    width: 120px;
    padding: 10px;
    border-radius: 5px;
    background-color: #2c3c6b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .noProductsText {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
`;
