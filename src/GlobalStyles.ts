import { createGlobalStyle } from 'styled-components';

export const globalMaxWidth = '1200px';

export const globalPadding = {
  mobileXxs: '15px',
  mobile: '30px',
  web: '50px',
};

export const colors = {
  fontMainColor: '#d3d3d3',
};

export const globalCustomizedStyle = {
  btnBorderRadius: '10px',
  sectionBorderRadius: '20px',
  sectionBackgroundColor: '#e6e6fa',
  innerSectionBackgroundColor: '#eeeeee',
  btnBackgroundColor: 'orange',
  btnPadding: '9px 30px',
  boxShadow: '7px 7px 7px lightgray',
  lineHeight: '30px',
};

export const fontSize = {
  xl: '30px',
  lg: '25px',
  md: '16px',
  sm: '13px',
  xs: '11px',
};

export const responsiveSize = {
  xs: '430px',
  sm: '576px',
  md: '768px',
  lg: '992px',
};

export const getResponsiveMediaQuery = (selectedSize: string): string => {
  switch (selectedSize) {
    // case 'xxs':
    //   return `@media screen and (max-width: ${responsiveSize.xxs})`;
    case 'xs':
      return `@media screen and (max-width: ${responsiveSize.xs})`;
    case 'sm':
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      return `@media screen and (min-width: ${responsiveSize.md})`;
    // and (max-width: ${responsiveSize.md})
    case 'lg':
      return `@media screen and (max-width: ${responsiveSize.lg})`;
    default:
      return '';
  }
};

export const lightTheme = {
  backgroundColor: '#fff',
  color: '#000',
  helloColor: 'blue',
};

export const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',
  helloColor: 'red',
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: transparent;
  }

  body {
    /* border: 1px solid green; */
    overflow: hidden;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.backgroundColor};
    /* color:  */
    color: ${({ theme }) => theme.color};
    transition: 1s;

  }

  :root {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
