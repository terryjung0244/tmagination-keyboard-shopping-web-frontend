/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './ProductCardDetail.styled';
import { IProduct } from '../../type/product.interface';
import minus from './../../assets/minus.png';
import plus from './../../assets/plus.png';
import saleIcon from '../../assets/sale.png';
import Features from './Features/Features';
import { useAppDispatch } from '../../service/store';

interface IProductCardDetailProps {
  quantityState: number;
  productDetail: IProduct;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
  handleSelectedFeatures: (feature: string, type: string) => void;
  handleDisocuntPrice: () => number;
  selectedFeatures: {
    color: string;
    switch?: string;
  };
  handleAddToCart: (product: IProduct, isGoCheckout: boolean) => void;
}

const ProductCardDetail = ({
  quantityState,
  productDetail,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleSelectedFeatures,
  selectedFeatures,
  handleDisocuntPrice,
  handleAddToCart,
}: IProductCardDetailProps) => {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   handleShowFeatures();
  // }, []);

  // const handleShowFeatures = async () => {
  //   const response = await fetch(
  //     `http://localhost:8070/api/keyboard/getKeyboardById?keyboardId=${productDetail.id}`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   );
  //   const result = await response.json();
  //   console.log(result);
  // };

  const clickFeature = (feature: string, type: string) => {
    handleSelectedFeatures(feature, type);
  };

  return (
    <Styles.ProductCardDetail>
      <div className="imageMainBox">
        <img className="imageBox" src={productDetail.imageUrl} alt="productImage" />
        <div className="descBox">{productDetail.desc}</div>
      </div>
      <div className="rightSideMainBox">
        <div className="categoryBox">{productDetail.category}</div>
        <div className="namePriceBoxMain">
          <div className="nameBox">{productDetail.name}</div>
          {productDetail.discountRate !== '0' ? (
            <div className="priceBox">
              <span className="discountPriceBox">${handleDisocuntPrice()}</span>
              <span>
                <img className="saleImageBox" src={saleIcon} alt="saleImage" />
              </span>
              <span className="originalPriceBox">${productDetail.price}</span>
            </div>
          ) : (
            <div className="priceWithoutDiscountBox">${handleDisocuntPrice()}</div>
          )}
          <div className="instockBox">{productDetail.stock} In stock </div>
        </div>
        <Features
          productFeatures={productDetail.features}
          selectedFeatures={selectedFeatures}
          clickFeature={clickFeature}
        />
        <div className="quantityAndCartBox">
          <div className="quantityMainBox">
            <div className="quantityBox">
              <div className="quantityControlBox" onClick={handleDecreaseQuantity}>
                <img className="quantityImageBox" src={minus} alt="minusImage" />
              </div>
              <div className="quantityStockBox">{quantityState}</div>
              <div className="quantityControlBox" onClick={handleIncreaseQuantity}>
                <img className="quantityImageBox" src={plus} alt="plusImage" />
              </div>
            </div>
          </div>
          <div className="cartBox" onClick={() => handleAddToCart(productDetail, false)}>
            Add to Cart
          </div>
        </div>
        <div className="checkoutBtnMainBox">
          <div className="checkoutBtnBox" onClick={() => handleAddToCart(productDetail, true)}>
            Proceed to Check out
          </div>
        </div>
      </div>
    </Styles.ProductCardDetail>
  );
};

export default ProductCardDetail;
