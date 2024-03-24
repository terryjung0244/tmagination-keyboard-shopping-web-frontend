import styled from 'styled-components';

export const Cart = styled.section`
  .cartMain {
    display: flex;
    .imageAndDetails {
      display: flex;
      border: 1px solid red;
      width: 600px;
      .imageItem {
        width: 200px;
      }
    }
    .orderSummary {
      display: flex;
      flex-direction: column;
      border: 1px solid red;
      width: 300px;
    }
  }
`;
