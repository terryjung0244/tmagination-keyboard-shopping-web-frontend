import styled from 'styled-components';
import { fontSize, getResponsiveMediaQuery } from '../../GlobalStyles';

export const Checkout = styled.section`
  /* border: 1px solid red; */
  font-size: ${fontSize.md};
  font-weight: 600;
  width: 60%;
  color: whitesmoke;

  ${getResponsiveMediaQuery('lg')} {
    width: 80%;
  }

  ${getResponsiveMediaQuery('sm')} {
    width: 100%;
  }

  ${getResponsiveMediaQuery('xs')} {
    width: 100%;
  }

  // Express Checkout Section
  .expressCheckoutSection {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    .expressCheckoutText {
      /* border: 1px solid red; */
      font-size: ${fontSize.lg};
      margin-bottom: 40px;
      color: whitesmoke;
    }

    .paypalAndCreditCard {
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .paypal {
        /* border: 1px solid red; */
        border-radius: 5px 5px 0px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #ffdf00;

        .paypalImage {
          width: 45px;
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
          width: 45px;
        }
      }
    }
  }

  // Contact Section
  .contactAndEmailMobileInputSection {
    /* border: 1px solid red; */
    margin-bottom: 40px;
    .contactText {
      /* border: 1px solid red; */
      margin: 20px 0px;
    }
    .emailMobileInput {
      border-radius: 5px;
      width: 100%;
      padding: 5px 5px 20px 10px;
      font-size: 20px;
      font-size: ${fontSize.sm};
    }
  }

  // Delivery Section
  .deliverySection {
    /* border: 1px solid red; */
    .deliveryText {
      margin: 20px 0px;
    }
    .countryRegionInput {
      font-size: ${fontSize.sm};
      border-radius: 5px;
      padding: 5px 5px 20px 10px;
      width: 100%;
      margin-bottom: 20px;
    }
    .firstAndLastNameInput {
      ${getResponsiveMediaQuery('sm')} {
        flex-direction: column;
      }
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .firstNameInput {
        ${getResponsiveMediaQuery('sm')} {
          margin-bottom: 20px;
          width: 100%;
        }
        width: 48%;
        font-size: ${fontSize.sm};
        border-radius: 5px;
        padding: 5px 5px 20px 10px;
      }
      .lastNameInput {
        ${getResponsiveMediaQuery('sm')} {
          width: 100%;
        }
        width: 48%;
        font-size: ${fontSize.sm};
        border-radius: 5px;
        padding: 5px 5px 20px 10px;
      }
    }
    .addressInput {
      width: 100%;
      font-size: ${fontSize.sm};
      border-radius: 5px;
      padding: 5px 5px 20px 10px;
      margin-bottom: 20px;
    }
    .optionalApartmentInput {
      width: 100%;
      font-size: ${fontSize.sm};
      border-radius: 5px;
      padding: 5px 5px 20px 10px;
      margin-bottom: 20px;
    }

    .cityProvincePostalCodeSection {
      ${getResponsiveMediaQuery('sm')} {
        flex-direction: column;
      }
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;

      .cityInput {
        ${getResponsiveMediaQuery('sm')} {
          width: 100%;
        }
        font-size: ${fontSize.sm};
        border-radius: 5px;
        padding: 5px 5px 20px 10px;
        margin-bottom: 20px;
        width: 31%;
      }
      .provinceInput {
        ${getResponsiveMediaQuery('sm')} {
          width: 100%;
        }
        font-size: ${fontSize.sm};
        border-radius: 5px;
        padding: 5px 5px 20px 10px;
        margin-bottom: 20px;
        width: 31%;
        margin-bottom: 20px;
      }
      .postalCodeInput {
        ${getResponsiveMediaQuery('sm')} {
          width: 100%;
        }
        font-size: ${fontSize.sm};
        border-radius: 5px;
        padding: 5px 5px 20px 10px;
        margin-bottom: 20px;
        width: 31%;
      }
    }
    .phoneInput {
      font-size: ${fontSize.sm};
      border-radius: 5px;
      padding: 5px 5px 20px 10px;
      margin-bottom: 40px;
      width: 100%;
    }

    .shippingAndExpressDeliverySection {
      /* border: 1px solid red; */
      margin-bottom: 40px;
      .shippingMethodText {
        margin-bottom: 20px;
      }
      .expressDeliveryAndPrice {
        color: black;
        background-color: #ebf3ff;
        border: 2px solid #0476bf;
        font-size: ${fontSize.md};
        font-weight: 500;
        padding: 10px;
        border-radius: 5px;
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
    margin-bottom: 40px;
    .paymentText {
      margin-bottom: 20px;
    }
    .paypalTextAndLogo {
      border: 2px solid #0476bf;
      font-size: ${fontSize.md};
      font-weight: 500;
      border-radius: 5px 5px 0px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 15px 0px 15px;
      background-color: #ebf3ff;
      .paypalText {
        color: black;
      }
      .paypalLogoText {
        .paypalImage {
          /* border: 1px solid red; */
          width: 45px;
        }
      }
    }
    .secureText {
      color: black;
      ${getResponsiveMediaQuery('sm')} {
        font-size: ${fontSize.sm};
      }
      font-size: ${fontSize.sm};
      font-weight: 500;
      border: 2px solid #0476bf;
      border-top: 0px;
      border-radius: 0px 0px 5px 5px;
      padding: 12px;
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
      font-weight: 500;
      margin-bottom: 20px;
    }

    .shippingAndCost {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .total {
      margin-bottom: 60px;
      display: flex;
      justify-content: space-between;
      font-size: ${fontSize.lg};
    }

    .clickToPay {
      border-radius: 5px;
      text-align: center;
      color: #ebf3ff;
      padding: 10px;
      background-color: #18c424;
    }
  }
`;
