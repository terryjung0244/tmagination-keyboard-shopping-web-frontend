import styled from 'styled-components';
import { fontSize } from '../../../GlobalStyles';

export const Features = styled.section`
  font-size: ${fontSize.sm};
  border-bottom: 2px solid #dedede;
  margin-bottom: 30px;

  .keyboardFeatureText {
    font-size: ${fontSize.xs};
    font-weight: 600;
    margin-bottom: 10px;
  }

  .keyboardselectFeaturesContainer {
    display: flex;

    .keyboardselectFeaturesItem {
      border: 1px solid #d3d3d3;
      background-color: aqua;
      width: 70px;
      padding: 5px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 30px;
    }
  }
`;
