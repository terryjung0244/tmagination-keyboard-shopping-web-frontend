import styled from 'styled-components';
import { colors, fontSize, getResponsiveMediaQuery } from '../../GlobalStyles';

export const ProductCardDetail = styled.section`
  border: 2px solid #dedede;
  font-size: ${fontSize.md};
  color: ${colors.fontMainColor};
  display: flex;
  width: 800px;

  ${getResponsiveMediaQuery('lg')} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2c3c6b;
    width: 500px;
  }

  ${getResponsiveMediaQuery('sm')} {
    flex-direction: column;
    width: 380px;
  }

  .imageMainBox {
    /* border: 1px solid yellow; */
    background-color: #2c3c6b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    width: 50%;

    ${getResponsiveMediaQuery('xs')} {
      padding: 30px;
    }

    .imageBox {
      /* border: 1px solid red; */
      width: 340px;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 30px;

      ${getResponsiveMediaQuery('lg')} {
      }

      ${getResponsiveMediaQuery('xs')} {
        height: 150px;
      }
    }

    .descBox {
      /* border: 1px solid red; */
      color: whitesmoke;
    }
  }

  .rightSideMainBox {
    /* border: 1px solid red; */
    background-color: #2c3c6b;
    padding: 30px;
    color: whitesmoke;
    width: 50%;

    ${getResponsiveMediaQuery('lg')} {
      width: 100%;
    }

    .categoryBox {
      font-size: ${fontSize.sm};

      font-weight: 600;
      margin-bottom: 20px;
    }

    .namePriceBoxMain {
      /* border: 1px solid red; */
      margin-bottom: 20px;
      border-bottom: 2px solid #dedede;
      font-weight: 600;
      .nameBox {
        font-size: ${fontSize.md};
        margin-bottom: 10px;
      }
      .priceWithoutDiscountBox {
        margin-bottom: 20px;
      }
      .priceBox {
        font-size: ${fontSize.md};
        margin-bottom: 20px;
        .discountPriceBox {
        }

        .saleImageBox {
          width: 30px;
        }
        .originalPriceBox {
          font-size: ${fontSize.sm};
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .instockBox {
        font-size: ${fontSize.sm};
        color: #14e323;
        margin-bottom: 20px;
      }
    }

    .selectFeaturesBox {
      border-bottom: 2px solid #dedede;
      padding-bottom: 20px;
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 25px;
      margin-top: 20px;

      .featuresNameBox {
        margin-bottom: 20px;
        display: flex;
        /* border: 1px solid red; */
      }

      .selectFeaturesContainer {
        display: flex;

        .selectFeaturesItem {
          border: 1px solid black;
          font-size: 20px;
          width: 100px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
        }
      }
    }

    .quantityAndCartBox {
      height: 40px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .cartBox {
        font-size: ${fontSize.md};
        border: 1px solid white;
        color: white;
        width: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
      }

      .quantityMainBox {
        border: 2px solid whitesmoke;
        width: 40%;
        margin-bottom: 20px;
        height: 100%;

        .quantityBox {
          display: flex;
          height: 100%;

          .quantityStockBox {
            /* border: 1px solid red; */
            background-color: white;
            color: black;
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${fontSize.md};
          }

          .quantityControlBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35%;
            background-color: white;

            .quantityImageBox {
              width: 12px;
            }
          }
        }
      }
    }

    .checkoutBtnMainBox {
      .checkoutBtnBox {
        width: 100%;
        height: 40px;
        font-size: ${fontSize.md};
        font-weight: 600;
        background-color: #14e323;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
      }
    }
  }
`;
