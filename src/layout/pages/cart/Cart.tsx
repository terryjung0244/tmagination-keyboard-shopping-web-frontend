import React from 'react';
import * as Styles from './Cart.styled';
import { useAppDispatch, useAppSelector } from '../../../service/store';
import { IProduct } from '../../../type/product.interface';

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
        <div>Your Cart</div>
        <div onClick={handleUpdateCart}>Update Cart</div>
        <div>
          {cart.map((cartItem: IProduct, index: number) => {
            return (
              <div className="cartMain" key={index}>
                <div className="imageAndDetails">
                  <img className="imageItem" src={cartItem.imageUrl} alt="" />
                  <div>
                    <div>{cartItem.name}</div>
                    <div>{cartItem.price}</div>
                    <div>Color: {cartItem.features.color}</div>
                    {cartItem.category === 'KEYBOARD' && (
                      <div>Switches: {cartItem.features.switch}</div>
                    )}
                    <div>Quantity: {cartItem.quantity}</div>
                    <div style={{ display: 'flex' }}>
                      <div onClick={() => handleDecreaseQuantity(cartItem)}>-</div>
                      <div style={{ margin: '0 10px' }}>{cartItem.quantity}</div>
                      <div onClick={() => handleIncreaseQuantity(cartItem)}>+</div>
                    </div>
                    <div onClick={() => handleDeleteCart(cartItem.cartId)}>Delete Cart</div>
                  </div>
                </div>
                <div className="orderSummary">
                  <div>Order summary</div>
                  <div>Add order note</div>
                  <div>Taxes calculated at checkout</div>
                  <div>Subtotal: ${cartItem.price}</div>
                  <div>Checkout</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Styles.Cart>
  );
};

export default Cart;
