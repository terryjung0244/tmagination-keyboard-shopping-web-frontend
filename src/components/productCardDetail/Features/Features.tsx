/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './Features.styled';
import { IProduct } from '../../../type/product.interface';

interface FeaturesProps {
  productDetail: IProduct;
  handleSelectFeatures: (keyboardColor: string) => void;
}

const Features = ({ productDetail, handleSelectFeatures }: FeaturesProps) => {
  console.log(productDetail);
  return (
    <Styles.Features>
      <div>
        <div className="keyboardFeatureText">Color</div>
        <div className="keyboardselectFeaturesContainer">
          {productDetail.features.color.map((keyboardColor: string, index) => {
            console.log(keyboardColor);
            return (
              <div key={index} onClick={() => handleSelectFeatures(keyboardColor)}>
                <div className="keyboardselectFeaturesItem">{keyboardColor}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="keyboardFeatureText">Switch</div>
        <div className="keyboardselectFeaturesContainer">
          {productDetail.features.switch.map((keyboardSwitch: string, index) => {
            console.log(keyboardSwitch);
            return (
              <div
                className="keyboardselectFeaturesContainer"
                key={index}
                onClick={() => handleSelectFeatures(keyboardSwitch)}
              >
                <div className="keyboardselectFeaturesItem">{keyboardSwitch}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Styles.Features>
  );
};

export default Features;
