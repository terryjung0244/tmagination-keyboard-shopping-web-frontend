/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import * as Styles from './Checkout.styled';
import paypal from '../../assets/paypal.png';
import creditCard from '../../assets/creditCard.png';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../service/store';
import { IProduct } from '../../type/product.interface';

const Checkout = () => {
  const { cart } = useAppSelector((state) => state.cartSlice);
  // const { state } = useLocation();

  console.log(cart);

  useEffect(() => {
    handleSubTotalCost();
    handleTotalCost();
  });

  const [subTotalCost, setSubTotalCost] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  const handlePrice = (cartItem: IProduct) => {
    // quantity saleprice
    return (
      (parseInt(cartItem.price) - parseInt(cartItem.price) * parseFloat(cartItem.discountRate)) *
      (cartItem.quantity as number)
    );
  };

  const handleSubTotalCost = () => {
    console.log('1');
    const totalPriceSum = cart.reduce((accumulator, currentObjectValue): any => {
      return accumulator + handlePrice(currentObjectValue); // discount rate 적용해야함.
    }, 0);
    setSubTotalCost(totalPriceSum);
  };

  const handleTotalCost = () => {
    setTotalCost(subTotalCost + 20);
  };

  return (
    <Styles.Checkout>
      <div className="expressCheckoutSection">
        <div className="expressCheckoutText">Express checkout</div>
        <div className="paypalAndCreditCard">
          <div className="paypal">
            <img className="paypalImage" src={paypal} />
          </div>
          <div className="creditCard">
            <img className="creditCardImage" src={creditCard} />
          </div>
        </div>
      </div>

      <div className="contactAndEmailMobileInputSection">
        <div className="contactText">Contact</div>
        <input className="emailMobileInput" placeholder="Email or mobile phone number" />
      </div>

      <div className="deliverySection">
        <div className="deliveryText">Delivery</div>
        <input className="countryRegionInput" placeholder="Country/Region" />
        <div className="firstAndLastNameInput">
          <input className="firstNameInput" placeholder="First Name" />
          <input className="lastNameInput" placeholder="Last Name" />
        </div>
        <input className="addressInput" placeholder="Address" />
        <input className="optionalApartmentInput" placeholder="Apartment, suite, etc. (optional)" />
        <div className="cityProvincePostalCodeSection">
          <input className="cityInput" placeholder="City" />
          <input className="provinceInput" placeholder="Province" />
          <input className="postalCodeInput" placeholder="Postal Code" />
        </div>
        <input className="phoneInput" placeholder="Phone" />

        <div className="shippingAndExpressDeliverySection">
          <div className="shippingMethodText">Shipping Method</div>
          <div className="expressDeliveryAndPrice">
            <div className="expressDeliveryText">Express Delivery</div>
            <div className="shippingCost">$20.00</div>
          </div>
        </div>

        <div className="paymentSection">
          <div className="paymentText">Payment</div>
          <div className="paypalTextAndLogo">
            <div className="paypalText">PayPal</div>
            <div className="paypalLogoText">
              <img className="paypalImage" src={paypal} />
            </div>
          </div>
          <div className="secureText">
            After clicking "Pay with Paypal", you will be redirected to PayPal to complete your
            purchase securely.
          </div>
        </div>

        <div className="orderSummarySection">
          <div className="orderSummaryText">Order summary</div>
          <div className="subTotalAndPrice">
            <div>Subtotal</div>
            {/* <div>${state}</div> */}
            {/* 카트에서 Checkout눌렀을떄 나오는 총가격 */}
            <div>${subTotalCost}</div>
            {/* 상품페이지에서 Proceed To Checkout 눌렀을떄 나오는 총가격 */}
          </div>
          <div className="shippingAndCost">
            <div>Shipping</div>
            <div>$20.00</div>
          </div>
          <div className="total">
            <div>Total</div>
            <div>${totalCost}</div>
          </div>
          <div className="clickToPay">Click To Pay</div>
        </div>
      </div>
    </Styles.Checkout>
  );
};

export default Checkout;
