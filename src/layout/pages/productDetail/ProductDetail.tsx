/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../../../type/product.interface';
import ProductCardDetail from '../../../components/productCardDetail/ProductCardDetail';
import arrowImage from '../../../assets/previous.png';

interface IStateProps {
  product: IProduct;
}

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state }: { state: IStateProps } = useLocation();
  const { product } = state;

  const [quantity, setQuantity] = useState<number>(1);

  const handleDisocuntPrice = () => {
    return (
      parseInt(state.product.price) -
      parseInt(state.product.price) * parseFloat(state.product.discountRate)
    );
  };

  const handlePreviousPage = () => {
    navigate(-1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < parseInt(state.product.stock)) {
      setQuantity(quantity + 1);
    }
    console.log('Inc');
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    console.log('Dec');
  };

  console.log(quantity);

  const handleAddToCart = (product: IProduct) => {
    console.log(product);
    const cartLocalStorage = localStorage.getItem('cart');
    console.log(cartLocalStorage);
    if (cartLocalStorage) {
      const parsedCartLocalStorage = JSON.parse(cartLocalStorage);
      const tempProduct = { ...product, quantity };
      parsedCartLocalStorage.push(tempProduct);
      localStorage.setItem('cart', JSON.stringify(parsedCartLocalStorage));
      return;
    }
    const tempProduct = { ...product, quantity }; // {...이유} state?
    localStorage.setItem('cart', JSON.stringify([tempProduct]));
  };

  console.log(quantity);
  return (
    <div>
      <div onClick={handlePreviousPage}>
        <img src={arrowImage} alt="arrowImage" style={{ width: '50px', marginBottom: '20px' }} />
      </div>

      <ProductCardDetail
        quantityState={quantity}
        productDetail={product}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleDisocuntPrice={handleDisocuntPrice}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductDetail;

/**
 * 링크 클릭 했을 때, state 값으로 해당 키보드 데이터 넘기기
 * 또는
 * 링크 클릭 하고 페이지 이동됬을 때, 넘어온 id 값으로 API 부르기
 */
