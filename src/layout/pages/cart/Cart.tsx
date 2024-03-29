import React from 'react';
import * as Styles from './Cart.styled';
import { useAppDispatch, useAppSelector } from '../../../service/store';
import { IProduct } from '../../../type/product.interface';
import minus from '../../../assets/minus.png';
import plus from '../../../assets/plus.png';
import deleteIcon from '../../../assets/delete.png';

import {
  cartQuantityDecrease,
  cartQuantityIncrease,
  deleteCart,
} from '../../../service/slice/cartSlice';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);
  // console.log(cart);

  const handleUpdateCart = () => {
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Successfully updated cart');
  };

  const handleDeleteCart = (cartId: string) => {
    dispatch(deleteCart(cartId));
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
                <div className="cartSection" key={index}>
                  <div className="cartSection_imageAndDetails_container">
                    <img className="cartSection_image_container" src={cartItem.imageUrl} alt="" />
                    <div>
                      <div className="cartSection_name_container">{cartItem.name}</div>
                      <div className="cartSection_price_container">${cartItem.price}</div>
                      <div className="cartSection_color_container">
                        Color: {cartItem.features.color}
                      </div>
                      {cartItem.category === 'KEYBOARD' && (
                        <div className="cartSection_switches_container">
                          Switches: {cartItem.features.switch}
                        </div>
                      )}
                      <div className="cartSection_quantity_container">
                        Quantity: {cartItem.quantity}
                      </div>
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
                  </div>
                </div>
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
              Subtotal: <span className="subtotal-price">$500</span>
            </div>
          </div>
        </div>
        <div className="updateCartAndCheckoutSection">
          <div className="updateCart" onClick={handleUpdateCart}>
            Update Cart
          </div>
          <div className="checkout">Checkout</div>
        </div>
      </div>
    </Styles.Cart>
  );
};

export default Cart;
