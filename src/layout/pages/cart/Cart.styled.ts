import styled from 'styled-components';

export const Cart = styled.section`
  /* border: 1px solid red; */

  .yourCartText {
    font-size: 60px;
    font-weight: 600;
    border-bottom: 2px solid #dedede;
    padding-bottom: 60px;
  }

  .cartMainSection {
    .leftSideCartSection {
      /* display: grid;
      grid-template-columns: repeat(2, 1fr); */
    }
    .cartSection_imageAndDetails_container {
      display: flex;
      /* display: grid;
      grid-template-columns: repeat(2, 1fr); */
      /* border: 1px solid red; */
      width: 100%;
      padding: 50px 0px;
      .cartSection_image_container {
        /* height: 200px; */
        width: 100%;
        object-fit: scale-down;
        /* margin-right: 30px; */
      }
      .cartSection_name_container {
        font-size: 30px;
        margin-bottom: 15px;
      }
      .cartSection_price_container {
        font-size: 25px;
        margin-bottom: 15px;
        .discountPriceBox {
        }
        .saleImageBox {
          width: 50px;
        }
        .originalPriceBox {
          font-size: 20px;
          margin-left: 10px;
          text-decoration: line-through;
        }
        .originalPriceBox {
        }
      }
      .priceWithoutDiscountBox {
        font-size: 25px;
        margin-bottom: 15px;
      }

      .cartSection_color_container {
        font-size: 25px;
        margin-bottom: 10px;
      }
      .cartSection_switches_container {
        font-size: 25px;
        margin-bottom: 10px;
      }
      .cartSection_quantity_container {
        font-size: 25px;
        margin-bottom: 20px;
      }
    }

    .quantityContorlBoxAndRemoveButton {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;

      .removeBox {
        .removeButtonBox {
          width: 30px;
          margin-left: 20px;
        }
      }
    }

    .quantityControlBox {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 3px solid lightgray;
      width: 150px;
      padding: 10px 10px;

      .minusControlBoxImage {
        width: 15px;
      }
      .textControlBox {
        font-size: 20px;
      }
      .plusControlBoxImage {
        width: 15px;
      }
    }

    .bottomSection {
      /* border: 1px solid red; */

      .orderSummary {
        border-top: 2px solid #dedede;
        border-bottom: 2px solid #dedede;
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      .addOrderNote {
        font-size: 30px;
        margin-bottom: 30px;
      }
      .taxesCalculated {
        font-size: 30px;
        margin-bottom: 30px;

        .taxesAndShpping {
        }
      }
      .subtotal {
        font-size: 35px;
        margin-bottom: 30px;
        font-weight: 600;
        padding-bottom: 30px;
        border-bottom: 2px solid #dedede;

        .subtotal-price {
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
    margin-top: 40px;

    .updateCart {
      border: 2px solid #ffdf00;
      background-color: #ffdf00;
      padding: 10px 30px;
      width: 250px;
    }
    .checkout {
      border: 2px solid black;
      background-color: black;
      color: white;
      padding: 10px 30px;
      margin-left: 30px;
      width: 250px;
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
