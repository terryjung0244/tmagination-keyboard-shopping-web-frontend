import styled from 'styled-components';

export const Createkeyboard = styled.section`
  width: 200px;
  border: 1px solid #dedede;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
  color: #333;

  .cardMain {
    .cardOutOfStock {
      position: absolute;
      top: 0;
      left: 0;
      background-color: red;
      padding: 0px 10px;
      color: white;
    }
  }

  .cardImageUrl {
    /* border: 1px solid red; */
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;
    /* border: 1px solid red; */
  }

  .cardName {
    /* border: 1px solid red; */
  }

  .cardDesc {
    /* border: 1px solid red; */
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .cardPrice {
    /* border: 1px solid red; */
  }
`;
