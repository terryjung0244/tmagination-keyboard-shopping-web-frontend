import React from 'react';
import * as Styles from './Cart.styled';
import { useAppDispatch, useAppSelector } from '../../../service/store';
import { IProduct } from '../../../type/product.interface';
import { updateCartRequest } from '../../../service/slice/cartThunk';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);
  console.log(cart);

  const handleUpdateCart = (cart: string) => {
    dispatch(updateCartRequest(cart));
  };

  return (
    <Styles.Cart>
      <div>
        <div>Your Cart</div>
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
                    <div>Switches: {cartItem.features.switch}</div>
                    <div>Quantity: {cartItem.quantity}</div>
                    <div>- 1 +</div>
                    <div onClick={() => handleUpdateCart('1')}>Update Cart</div>
                    <div>Delete Cart</div>
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
