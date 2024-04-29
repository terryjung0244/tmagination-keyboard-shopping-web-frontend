import React from 'react';
import * as Styles from './Features.styled';

interface FeaturesProps {
  productFeatures: {
    color: string[];
    switch: string[];
  };
  selectedFeatures: {
    color: string;
    switch?: string;
  };
  clickFeature: (feature: string, type: string) => void;
}

const Features = ({ productFeatures, selectedFeatures, clickFeature }: FeaturesProps) => {
  return (
    <Styles.Features>
      <div className="featureText">Color</div>

      <div className="selectFeaturesContainer">
        {productFeatures.color.map((keyboardColor: string, index) => {
          return (
            <div key={index} onClick={() => clickFeature(keyboardColor, 'color')}>
              <div
                className="selectFeaturesColorItem"
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

      <div className="featureText">Switch</div>
      <div className="selectFeaturesContainer">
        {productFeatures.switch?.map((keyboardSwitch: string, index) => {
          return (
            <div key={index} onClick={() => clickFeature(keyboardSwitch, 'switch')}>
              <div
                className="selectFeaturesSwitchItem"
                style={{
                  color: selectedFeatures.switch === keyboardSwitch ? 'white' : 'black',
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
    </Styles.Features>
  );
};

export default Features;
