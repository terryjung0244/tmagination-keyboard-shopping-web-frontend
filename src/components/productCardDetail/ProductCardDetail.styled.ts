import styled from 'styled-components';

export const ProductCardDetail = styled.section`
  /* border: 2px solid #dedede; */
  border: 1px solid red;
  display: flex;

  .imageMainBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    padding: 30px;

    .imageBox {
      width: 450px;
      border-radius: 5px;
      margin-bottom: 40px;
    }

    .descBox {
      font-size: 20px;
    }
  }

  .rightSideMainBox {
    border-left: 2px solid #dedede;
    width: 100%;
    padding: 30px;

    .categoryBox {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .namePriceBoxMain {
      margin-bottom: 10px;
      border-bottom: 2px solid #dedede;
      font-weight: 600;
      .nameBox {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .priceBox {
        font-size: 30px;
        margin-bottom: 20px;
      }
    }

    .switchSelectMainBox {
      border-bottom: 2px solid #dedede;
      padding-bottom: 20px;
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 20px;
      margin-top: 20px;

      .switchesNameBox {
        margin-bottom: 20px;
      }
      .switchSelectColorBox {
        border: 1px solid black;
        margin-right: 5px;
        width: 100px;
        height: 40px;
        margin-bottom: 20px;
      }
    }

    .quantityAndCartBox {
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .cartBox {
        border: 2px solid black;
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
      }

      .quantityMainBox {
        border: 2px solid black;
        width: 40%;
        margin-bottom: 20px;
        height: 100%;

        .quantityBox {
          display: flex;
          height: 100%;

          .quantityStockBox {
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          }

          .quantityControlBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35%;
            background-color: white;

            .quantityImageBox {
              width: 15px;
            }
          }
        }
      }
    }

    .checkoutBtnMainBox {
      .checkoutBtnBox {
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        background-color: #ffd300;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
