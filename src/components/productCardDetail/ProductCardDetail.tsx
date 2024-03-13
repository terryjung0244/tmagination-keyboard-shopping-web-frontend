import React from 'react';
import * as Styles from './ProductCardDetail.styled';
import { IProduct } from '../../type/product.interface';
import minus from './../../assets/minus.png';
import plus from './../../assets/plus.png';

interface IProductCardDetailProps {
  keyboardString: string;
  switchString: string;
  keycapString: string;
  productDetail: IProduct;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}

const ProductCardDetail = ({
  keyboardString,
  switchString,
  keycapString,
  productDetail,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IProductCardDetailProps) => {
  console.log(productDetail);
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
          <div className="priceBox">{productDetail.price}</div>
        </div>
        {keyboardString === 'keyboards' && (
          <>
            <div className="switchSelectMainBox">
              <div className="switchesNameBox">Switches</div>
              <button className="switchSelectColorBox">Red</button>
              <button className="switchSelectColorBox">Yellow</button>
              <button className="switchSelectColorBox">Brown</button>
              <button className="switchSelectColorBox">Blue</button>
              <button className="switchSelectColorBox">Black</button>
            </div>
          </>
        )}
        {switchString === 'switches' && (
          <>
            <div className="switchSelectMainBox">
              <div className="switchesNameBox">Switch Color</div>
              <button className="switchSelectColorBox">Red</button>
              <button className="switchSelectColorBox">Yellow</button>
              <button className="switchSelectColorBox">Brown</button>
              <button className="switchSelectColorBox">Black</button>
            </div>
          </>
        )}
        {keycapString === 'keycaps' && (
          <>
            <div className="switchSelectMainBox">
              <div className="switchesNameBox">Keycap Color</div>
              <button className="switchSelectColorBox">Beige</button>
              <button className="switchSelectColorBox">Green</button>
              <button className="switchSelectColorBox">Mint</button>
              <button className="switchSelectColorBox">Purple</button>
            </div>
          </>
        )}
        <div className="quantityAndCartBox">
          <div className="quantityMainBox">
            <div className="quantityBox">
              <div className="quantityControlBox" onClick={handleDecreaseQuantity}>
                <img className="quantityImageBox" src={minus} alt="minusImage" />
              </div>
              <div className="quantityStockBox">{productDetail.stock}</div>
              <div className="quantityControlBox" onClick={handleIncreaseQuantity}>
                <img className="quantityImageBox" src={plus} alt="plusImage" />
              </div>
            </div>
          </div>
          <div className="cartBox">Add to Cart</div>
        </div>

        <div className="checkoutBtnMainBox">
          <div className="checkoutBtnBox">Proceed to Check out</div>
        </div>
      </div>
    </Styles.ProductCardDetail>
  );
};

export default ProductCardDetail;
