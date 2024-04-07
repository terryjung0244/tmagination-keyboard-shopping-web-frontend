import styled from 'styled-components';

export const Features = styled.section`
  font-size: 15px;
  border-bottom: 2px solid #dedede;
  margin-bottom: 30px;

  .keyboardFeatureText {
    font-weight: 600;
    margin-bottom: 10px;
  }

  .keyboardselectFeaturesContainer {
    display: flex;

    .keyboardselectFeaturesItem {
      border: 1px solid black;
      width: 100px;
      padding: 7px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 30px;
    }
  }
`;
