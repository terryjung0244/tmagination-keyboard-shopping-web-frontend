import styled from 'styled-components';

export const Createkeyboard = styled.section`
  /* border: 1px solid red; */
  min-width: 180px;
  min-height: 500px;
  padding: 20px 0px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
  color: #333;

  .cardMain {
    /* border: 1px solid red; */
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

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
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;
    /* border: 1px solid red; */
  }

  .cardName {
    /* border: 1px solid red; */
    font-size: 30px;
    margin-bottom: 10px;
  }

  .cardDesc {
    /* border: 1px solid red; */
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .cardPrice {
    /* border: 1px solid red; */
    font-size: 30px;
  }
`;
