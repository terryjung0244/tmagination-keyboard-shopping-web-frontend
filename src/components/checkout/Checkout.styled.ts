import styled from 'styled-components';

export const Checkout = styled.section`
  /* border: 1px solid red; */
  font-size: 35px;
  font-weight: 600;

  // Express Checkout Section
  .expressCheckoutSection {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    .expressCheckoutText {
      /* border: 1px solid red; */
      font-size: 25px;
      margin-bottom: 40px;
      color: gray;
    }

    .paypalAndCreditCard {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .paypal {
        /* border: 1px solid red; */
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #ffdf00;

        .paypalImage {
          width: 80px;
        }
      }
      .creditCard {
        /* border: 1px solid red; */
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: lightgray;
        border-radius: 0px 0px 10px 10px;

        .creditCardImage {
          width: 80px;
        }
      }
    }
  }

  // Contact Section
  .contactAndEmailMobileInputSection {
    /* border: 1px solid red; */
    margin-bottom: 60px;
    .contactText {
      /* border: 1px solid red; */
      margin: 20px 0px;
    }
    .emailMobileInput {
      border: 2px solid lightgray;
      border-radius: 10px;
      width: 100%;
      padding: 10px 10px 40px 10px;
      font-size: 20px;
      padding-left: 20px;
    }
  }

  // Delivery Section
  .deliverySection {
    /* border: 1px solid red; */
    .deliveryText {
      margin: 20px 0px;
    }
    .countryRegionInput {
      font-size: 20px;
      border: 2px solid lightgray;
      border-radius: 10px;
      padding: 10px 10px 40px 10px;
      width: 100%;
      margin-bottom: 20px;
    }
    .firstAndLastNameInput {
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .firstNameInput {
        width: 48%;
        font-size: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px 10px 40px 10px;
      }
      .lastNameInput {
        width: 48%;
        font-size: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px 10px 40px 10px;
      }
    }
    .addressInput {
      width: 100%;
      font-size: 20px;
      border: 2px solid lightgray;
      border-radius: 10px;
      padding: 10px 10px 40px 10px;
      margin-bottom: 20px;
    }
    .optionalApartmentInput {
      width: 100%;
      font-size: 20px;
      border: 2px solid lightgray;
      border-radius: 10px;
      padding: 10px 10px 40px 10px;
      margin-bottom: 20px;
    }

    .cityProvincePostalCodeSection {
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .cityInput {
        font-size: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px 10px 40px 10px;
        margin-bottom: 20px;
        width: 30%;
      }
      .provinceInput {
        font-size: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px 10px 40px 10px;
        width: 30%;
        margin-bottom: 20px;
      }
      .postalCodeInput {
        font-size: 20px;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 10px 10px 40px 10px;
        margin-bottom: 20px;
        width: 30%;
      }
    }
    .phoneInput {
      font-size: 20px;
      border: 2px solid lightgray;
      border-radius: 10px;
      padding: 10px 10px 40px 10px;
      margin-bottom: 60px;
      width: 100%;
    }

    .shippingAndExpressDeliverySection {
      /* border: 1px solid red; */
      margin-bottom: 60px;
      .shippingMethodText {
        margin-bottom: 20px;
      }
      .expressDeliveryAndPrice {
        background-color: #ebf3ff;
        border: 2px solid #0476bf;
        font-size: 25px;
        font-weight: 500;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        .expressDeliveryText {
        }
        .shippingCost {
        }
      }
    }
  }
  .paymentSection {
    margin-bottom: 60px;
    .paymentText {
      margin-bottom: 20px;
    }
    .paypalTextAndLogo {
      border: 2px solid #0476bf;
      font-size: 25px;
      font-weight: 500;
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 30px 0px 30px;
      background-color: #ebf3ff;
      .paypalText {
      }
      .paypalLogoText {
        .paypalImage {
          /* border: 1px solid red; */
          width: 100px;
        }
      }
    }
    .secureText {
      font-size: 25px;
      font-weight: 500;
      border: 2px 2px 0px 2px solid #0476bf;
      border-radius: 0px 0px 10px 10px;
      padding: 50px;
      text-align: center;
      background-color: #f5f5f5;
    }
  }

  .orderSummarySection {
    /* border: 1px solid red; */
    .orderSummaryText {
      margin-bottom: 20px;
    }

    .subTotalAndPrice {
      display: flex;
      justify-content: space-between;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .shippingAndCost {
      display: flex;
      justify-content: space-between;
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .total {
      margin-bottom: 60px;
      display: flex;
      justify-content: space-between;
    }

    .clickToPay {
      border-radius: 10px;
      text-align: center;
      color: #ebf3ff;
      border: 2px solid #0476bf;
      padding: 20px;
      background-color: #0476bf;
    }
  }
`;
