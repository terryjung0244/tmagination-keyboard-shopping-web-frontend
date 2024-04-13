import styled from 'styled-components';
import { colors, fontSize } from '../../../GlobalStyles';

export const AllProducts = styled.section`
  /* border: 1px solid red; */
  color: ${colors.fontMainColor};
  font-size: ${fontSize.md};
  min-height: 1000px;

  .allProductsText {
    /* border: 1px solid red; */
    font-size: ${fontSize.xl};
    font-weight: 600;
    margin-bottom: 20px;
  }

  .collectionText {
    /* border: 1px solid red; */
    font-size: ${fontSize.lg};
    font-weight: 500;
    padding-bottom: 80px;
    margin-bottom: 15px;
    border-bottom: 2px solid #dedede;
  }
`;
