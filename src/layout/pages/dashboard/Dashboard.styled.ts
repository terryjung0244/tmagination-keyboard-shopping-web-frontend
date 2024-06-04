import styled from 'styled-components';
import { colors, fontSize } from '../../../GlobalStyles';

export const Dashboard = styled.section`
  min-width: 1000px;
  min-height: 500px;
  margin-bottom: 50px;
  color: ${colors.fontMainColor};

  .dashboardText {
    font-size: ${fontSize.xl};
    font-weight: 600;
    padding-bottom: 15px;
    margin-bottom: 30px;
    border-bottom: 2px solid #dedede;
  }

  .linkContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btnMain {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: #2eff2e;
    border: 1px solid black;
    padding: 15px 30px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 8px;
    background-color: #084298;
  }
`;
