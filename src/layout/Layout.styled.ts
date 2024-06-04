import styled from 'styled-components';
import { globalMaxWidth, globalPadding } from '../GlobalStyles';

export const Layout = styled.section`
  .layout-section-max-width {
    max-width: ${globalMaxWidth};
    padding: 0 ${globalPadding.web}; //50px;
    background-color: #11182a;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
