/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './ProductCard.styled';

// interface ISwitchItemCardPropsType {
//   switchItemName: string;
//   switchItemDesc: string;
//   switchItemImageUrl: string;
//   switchItemPrice: string;
// }

// interface IKeyboardItemPropsType {
//   keyboardItemName: string;
//   keyboardItemDesc: string;
//   keyboardItemImage: string;
//   keyboardItemPrice: string;
// }

// interface IProductItemPropsType {
//   switchItemName: string;
//   switchItemDesc: string;
//   switchItemImageUrl: string;
//   switchItemPrice: string;
//   keyboardItemName: string;
//   keyboardItemDesc: string;
//   keyboardItemImage: string;
//   keyboardItemPrice: string;
// }

const ProductCard = ({
  switchItemName,
  switchItemDesc,
  switchItemImageUrl,
  switchItemPrice,
  keyboardItemImageUrl,
  keyboardItemName,
  keyboardItemDesc,
  keyboardItemPrice,
}: any) => {
  console.log(switchItemName);

  return (
    <Styles.Createkeyboard>
      {switchItemName && switchItemDesc && switchItemImageUrl && (
        <div className="cardMain">
          <img className="cardImageUrl" src={switchItemImageUrl} alt="SwitchImageError" />
          <div className="cardName">Name : {switchItemName}</div>
          <div className="cardDesc">Switch : {switchItemDesc}</div>
          <div className="cardPrice">Price : {switchItemPrice}</div>
        </div>
      )}

      {keyboardItemName && keyboardItemDesc && keyboardItemImageUrl && (
        <div className="cardMain">
          <img className="cardImageUrl" src={keyboardItemImageUrl} alt="SwitchImageError" />
          <div className="cardName">Name : {keyboardItemName}</div>
          <div className="cardDesc">Switch : {keyboardItemDesc}</div>
          <div className="cardPrice">Price : {keyboardItemPrice}</div>
        </div>
      )}
    </Styles.Createkeyboard>
  );
};

export default ProductCard;
