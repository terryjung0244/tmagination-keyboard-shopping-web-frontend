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
            return (
              <div key={index} onClick={() => clickFeature(keyboardColor, 'color')}>
                <div
                  className="keyboardselectFeaturesItem"
                  style={{
                    color: selectedFeatures.color === keyboardColor ? 'white' : 'black',
                    backgroundColor:
                      selectedFeatures.color === keyboardColor ? '#bfbfbf' : 'whitesmoke',
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
                    color: selectedFeatures.color === keyboardSwitch ? 'white' : 'black',
                    backgroundColor:
                      selectedFeatures.switch === keyboardSwitch ? '#bfbfbf' : 'whitesmoke',
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
