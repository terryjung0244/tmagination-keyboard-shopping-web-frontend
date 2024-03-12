/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { IProduct } from '../../../type/product.interface';
import ProductCardDetail from '../../../components/productCardDetail/ProductCardDetail';

const KeyboardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state }: { state: IProduct } = useLocation();

  console.log(state);
  const [quantity, setQuantity] = useState<number>(1);

  const handleDisocuntPrice = () => {
    return parseInt(state.price) - parseInt(state.price) * parseFloat(state.discountRate);
  };

  const handlePreviousPage = () => {
    navigate(-1);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < parseInt(state.stock)) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handlePreviousPage}>Previous</button>
      <ProductCardDetail
        productDetail={state}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
      />
    </div>
  );
};

export default KeyboardDetail;

/**
 * 링크 클릭 했을 때, state 값으로 해당 키보드 데이터 넘기기
 * 또는
 * 링크 클릭 하고 페이지 이동됬을 때, 넘어온 id 값으로 API 부르기
 */
