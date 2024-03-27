import styled from 'styled-components';
import { globalMaxWidth, globalPadding } from '../GlobalStyles';

export const Layout = styled.section`
  /* border: 2px solid red; */

  .layout-section-max-width {
    border: 2px solid red;
    max-width: ${globalMaxWidth};
    padding: 0 ${globalPadding.web}; //50px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
  }
`;
