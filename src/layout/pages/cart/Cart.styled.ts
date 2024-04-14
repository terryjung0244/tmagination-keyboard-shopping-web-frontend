import styled from 'styled-components';
import { fontSize, getResponsiveMediaQuery } from '../../../GlobalStyles';

export const Cart = styled.section`
  /* border: 1px solid yellow; */
  color: whitesmoke;
  width: 100%;

  .yourCartText {
    font-size: ${fontSize.lg};
    font-weight: 600;
    border-bottom: 2px solid #dedede;
    padding-bottom: 60px;
  }

  .cartMainSection {
    /* border: 1px solid red; */

    .leftSideCartSection {
      /* border: 1px solid red; */
      margin-top: 60px;
      /* border: 1px solid red; */
      /* display: grid;
      grid-template-columns: repeat(2, 1fr); */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .detailCartSection {
        /* border: 1px solid red; */
        margin-top: 20px;
        margin-bottom: 20px;
        ${getResponsiveMediaQuery('lg')} {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .cartSection_imageAndDetails_container {
      /* border: 1px solid red; */
      /* display: grid;
      grid-template-columns: repeat(2, 1fr); */
      /* border: 1px solid red; */
      width: 100%;
      margin-bottom: 30px;

      .cartSection_image_container {
        /* border: 1px solid red; */
        border-radius: 5px;
        /* height: 200px; */
        width: 280px;
        height: 180px;
        object-fit: cover;
        /* margin-right: 30px; */
      }
      .cartSection_name_container {
        margin-bottom: 15px;
      }
      .cartSection_price_container {
        margin-bottom: 15px;
        .discountPriceBox {
        }
        .saleImageBox {
          width: 50px;
        }
        .originalPriceBox {
          margin-left: 10px;
          text-decoration: line-through;
        }
        .originalPriceBox {
        }
      }
      .priceWithoutDiscountBox {
        margin-bottom: 15px;
      }

      .cartSection_color_container {
        font-size: ${fontSize.sm};
        margin-bottom: 10px;
      }
      .cartSection_switches_container {
        font-size: ${fontSize.sm};
        margin-bottom: 10px;
      }
      .cartSection_quantity_container {
        font-size: ${fontSize.sm};
      }
    }

    .quantityContorlBoxAndRemoveButton {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      margin-top: 40px;

      .removeBox {
        .removeButtonBox {
          width: 25px;
          margin-left: 20px;
          filter: invert(99%) sepia(38%) saturate(54%) hue-rotate(188deg) brightness(116%)
            contrast(92%);
        }
      }
    }

    .quantityControlBox {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 2px solid lightgray;
      width: 150px;
      padding: 7px 0px;

      .minusControlBoxImage {
        width: 15px;
        filter: invert(99%) sepia(38%) saturate(54%) hue-rotate(188deg) brightness(116%)
          contrast(92%);
      }
      .textControlBox {
        font-size: ${fontSize.md};
      }
      .plusControlBoxImage {
        width: 15px;
        filter: invert(99%) sepia(38%) saturate(54%) hue-rotate(188deg) brightness(116%)
          contrast(92%);
      }
    }

    .bottomSection {
      font-size: ${fontSize.md};

      .orderSummary {
        margin-top: 30px;
        font-size: ${fontSize.lg};
        border-top: 2px solid #dedede;
        border-bottom: 2px solid #dedede;
        padding-top: 30px;
        padding-bottom: 30px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      .addOrderNote {
        margin-bottom: 30px;
      }
      .taxesCalculated {
        margin-bottom: 30px;

        .taxesAndShpping {
        }
      }
      .subtotal {
        margin-bottom: 30px;
        font-weight: 600;
        padding-bottom: 30px;
        border-bottom: 2px solid #dedede;

        .subtotal-price {
          font-size: ${fontSize.lg};
          margin-left: 20px;
        }
      }
    }
  }

  .updateCartAndCheckoutSection {
    font-size: 30px;
    display: flex;
    font-weight: 600;
    /* border: 1px solid red; */

    .updateCart {
      border: 2px solid #ffdf00;
      background-color: #ffdf00;
      padding: 10px 30px;
      width: 250px;
    }
    .checkout {
      /* border: 2px solid black; */
      font-size: 20px;
      background-color: #14e323;
      color: black;
      padding: 8px 20px;
      width: 220px;
      text-align: center;
    }
  }
  /* 
  @media screen and (max-width: 768px) {
    .leftSideCartSection {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
`;
