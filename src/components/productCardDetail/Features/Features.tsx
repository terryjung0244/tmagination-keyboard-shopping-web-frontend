/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './Features.styled';

interface FeaturesProps {
  productFeatures: {
    color: string[];
    switch?: string[];
  };
  selectedFeatures: {
    color: string;
    switch?: string;
  };
  clickFeature: (feature: string, type: string) => void;
}

const Features = ({ productFeatures, selectedFeatures, clickFeature }: FeaturesProps) => {
  console.log(selectedFeatures);
  return (
    <Styles.Features>
      <div>
        <div className="keyboardFeatureText">Color</div>
        <div className="keyboardselectFeaturesContainer">
          {productFeatures.color.map((keyboardColor: string, index) => {
            // console.log(keyboardColor);
            return (
              <div key={index} onClick={() => clickFeature(keyboardColor, 'color')}>
                <div
                  className="keyboardselectFeaturesItem"
                  style={{
                    backgroundColor:
                      selectedFeatures.color === keyboardColor ? 'yellow' : 'transparent',
                  }}
                >
                  {keyboardColor}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="keyboardFeatureText">Switch</div>
        <div className="keyboardselectFeaturesContainer">
          {productFeatures.switch?.map((keyboardSwitch: string, index) => {
            // console.log(keyboardSwitch);
            return (
              <div
                className="keyboardselectFeaturesContainer"
                key={index}
                onClick={() => clickFeature(keyboardSwitch, 'switch')}
              >
                <div
                  className="keyboardselectFeaturesItem"
                  style={{
                    backgroundColor:
                      selectedFeatures.switch === keyboardSwitch ? 'yellow' : 'transparent',
                  }}
                >
                  {keyboardSwitch}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Styles.Features>
  );
};

export default Features;
