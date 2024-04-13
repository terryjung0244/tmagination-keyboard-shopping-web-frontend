import styled from 'styled-components';
import { colors, fontSize } from '../../../GlobalStyles';

export const Keycap = styled.section`
  width: 100%;
  color: ${colors.fontMainColor};
  font-size: ${fontSize.md};
  min-height: 1000px;

  .keycapsText {
    font-size: ${fontSize.xl};
    font-weight: 600;
    margin-bottom: 20px;
  }

  .collectionText {
    /* border: 1px solid red; */
    font-size: ${fontSize.lg};
    font-weight: 500;
    padding-bottom: 80px;
    margin-bottom: 30px;
    border-bottom: 2px solid #dedede;
  }
`;
