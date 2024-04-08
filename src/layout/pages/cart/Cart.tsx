/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import * as Styles from './Cart.styled';
import { useAppDispatch, useAppSelector } from '../../../service/store';
import { IProduct } from '../../../type/product.interface';
import minus from '../../../assets/minus.png';
import plus from '../../../assets/plus.png';
import saleIcon from '../../../assets/sale.png';
import deleteIcon from '../../../assets/delete.png';
import {
  cartQuantityDecrease,
  cartQuantityIncrease,
  deleteCart,
} from '../../../service/slice/cartSlice';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Practice from './Practice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);

  console.log(cart);

  useEffect(() => {
    handleSubtotalPrice();
  }, [cart]);

  const [subtotalPrice, setSubtotalPrice] = useState<number>(0);

  const handleSubtotalPrice = () => {
    console.log(cart);

    // const result = cart.map((carItem: IProduct) => {
    //   // if (carItem.discountRate !== '0') {
    //   //   Object.entries(carItem).map((item) => console.log(item));
    //   //   console.log(carItem);
    //   //        // setSubtotalPrice(handleDisocuntPrice(carItem)); //
    //   //   return;
    //   // }

    const totalPriceSum = cart.reduce((accumulator, currentObjectValue): any => {
      return accumulator + handlePrice(currentObjectValue);
      // setSubtotalPrice(totalPriceSum);
    }, 0);
    // });
    setSubtotalPrice(totalPriceSum);
    console.log(totalPriceSum);
  };

  console.log(subtotalPrice);

  const handlePrice = (cartItem: IProduct) => {
    // quantity saleprice
    return (
      (parseInt(cartItem.price) - parseInt(cartItem.price) * parseFloat(cartItem.discountRate)) *
      (cartItem.quantity as number)
    );
  };

  const handleDisocuntPrice = (cartItem: IProduct) => {
    return parseInt(cartItem.price) - parseInt(cartItem.price) * parseFloat(cartItem.discountRate);
  };

  // const handleUpdateCart = () => {
  //   localStorage.removeItem('cart');
  //   localStorage.setItem('cart', JSON.stringify(cart));
  //   alert('Successfully updated cart');
  // };

  const handleDeleteCart = (cartId: string) => {
    const cartResult: IProduct[] = JSON.parse(localStorage.getItem('cart') as string);
    // const indexResult = cartResult.findIndex(
    //   (cartSelectedIndex) => cartSelectedIndex.cartId === cartId,
    // );
    // cartResult.splice(indexResult, 1);
    const newCart = cartResult.filter((cartItem: IProduct) => cartItem.cartId !== cartId);
    localStorage.setItem('cart', JSON.stringify(newCart));

    dispatch(deleteCart(cartId));
    alert('Successfully deleted cart');
  };

  const handleDecreaseQuantity = (cartItem: IProduct) => {
    if (parseInt(cartItem.quantity as string) < 2) {
      return;
    }
    dispatch(cartQuantityDecrease(cartItem));
  };

  const handleIncreaseQuantity = (cartItem: IProduct) => {
    if (parseInt(cartItem.quantity as string) >= parseInt(cartItem.stock)) {
      return;
    }
    console.log(cartItem);
    dispatch(cartQuantityIncrease(cartItem));
  };

  return (
    <Styles.Cart>
      <div>
        <div className="yourCartText">Your Cart</div>
        <div className="cartMainSection">
          <div className="leftSideCartSection">
            {cart.map((cartItem: IProduct, index: number) => {
              return (
                <Row className="cartSection_imageAndDetails_container" key={index}>
                  <Col xs={12} lg={5}>
                    <img className="cartSection_image_container" src={cartItem.imageUrl} alt="" />
                  </Col>
                  <Col xs={12} lg={1}></Col>
                  <Col xs={12} lg={6}>
                    <div className="mt-5 mt-lg-0">
                      <div className="cartSection_name_container">{cartItem.name}</div>
                      {cartItem.discountRate !== '0' ? (
                        <div className="cartSection_price_container">
                          <span className="discountPriceBox">${handleDisocuntPrice(cartItem)}</span>
                          <span>
                            <img className="saleImageBox" src={saleIcon} alt="saleImage" />
                          </span>
                          <span className="originalPriceBox">${cartItem.price}</span>
                        </div>
                      ) : (
                        <div className="priceWithoutDiscountBox">${cartItem.price}</div>
                      )}
                      <div className="cartSection_color_container">
                        Color: {cartItem.features.color}
                      </div>
                      {cartItem.category === 'KEYBOARD' && (
                        <div className="cartSection_switches_container">
                          Switches: {cartItem.features.switch}
                        </div>
                      )}
                      <div className="cartSection_quantity_container">Stock: {cartItem.stock}</div>
                      <div className="quantityContorlBoxAndRemoveButton">
                        <div className="quantityControlBox">
                          <div onClick={() => handleDecreaseQuantity(cartItem)}>
                            <img className="minusControlBoxImage" src={minus} alt="minusImage" />
                          </div>
                          <div className="textControlBox">{cartItem.quantity}</div>
                          <div onClick={() => handleIncreaseQuantity(cartItem)}>
                            <img className="plusControlBoxImage" src={plus} alt="plusImage" />
                          </div>
                        </div>
                        <div
                          className="removeBox"
                          onClick={() => handleDeleteCart(cartItem.cartId)}
                        >
                          <img className="removeButtonBox" src={deleteIcon} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
          <div className="bottomSection">
            <div className="orderSummary">Order summary</div>
            <div className="addOrderNote">Add order note</div>
            <div className="taxesCalculated">
              <span className="taxesAndShpping">Taxes and shipping</span> calculated at checkout
            </div>
            <div className="subtotal">
              Subtotal: <span className="subtotal-price">$ {subtotalPrice}</span>
            </div>
          </div>
        </div>
        <div className="updateCartAndCheckoutSection">
          <Link to="/checkout" className="checkout">
            Checkout
          </Link>
        </div>

        <Practice />
      </div>
    </Styles.Cart>
  );
};

export default Cart;

// const names = {
//   color: ['black'],
//   switch: ['yellow', 'red'],
// };

// Object.entries(names).map((name) => {
//   console.log(name[0]);
//   console.log(name[1]);
// });
