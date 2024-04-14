import styled from 'styled-components';
import { fontSize, getResponsiveMediaQuery } from '../../../GlobalStyles';

export const Features = styled.section`
  font-size: ${fontSize.sm};
  border-bottom: 2px solid #dedede;
  margin-bottom: 30px;

  .featureText {
    font-size: ${fontSize.xs};
    font-weight: 600;
    margin-bottom: 10px;
  }

  .selectFeaturesContainer {
    display: flex;
    margin-bottom: 30px;

    ${getResponsiveMediaQuery('xs')} {
      flex-direction: column;
    }

    .selectFeaturesColorItem {
      width: 70px;
      padding: 6px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;

      ${getResponsiveMediaQuery('xs')} {
        margin-top: 10px;
        width: 100px;
      }
    }

    .selectFeaturesSwitchItem {
      /* border: 1px solid red; */
      width: 70px;
      padding: 6px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;

      ${getResponsiveMediaQuery('xs')} {
        margin-top: 10px;
        width: 100px;
      }
    }
  }
`;
