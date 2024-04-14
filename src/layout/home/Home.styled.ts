import styled from 'styled-components';
import { colors, fontSize, getResponsiveMediaQuery } from './../../GlobalStyles';

export const Home = styled.section`
  /* border: 1px solid red; */
  color: ${colors.fontMainColor};
  width: 65%;

  ${getResponsiveMediaQuery('lg')} {
    width: 80%;
  }

  ${getResponsiveMediaQuery('sm')} {
    width: 100%;
  }

  .carouselImages {
    /* border: 1px solid red; */
    width: 100%;
    height: 270px;
    object-fit: scale-down;
  }

  .keyboardIntroSection {
    /* border: 1px solid red; */
    margin-top: 50px;
    display: flex;

    ${getResponsiveMediaQuery('lg')} {
      flex-direction: column;
      align-items: center;
    }

    .keyboardImage {
      /* border: 1px solid red; */
      width: 300px;
      height: 200px;
      object-fit: cover;

      ${getResponsiveMediaQuery('lg')} {
        width: 100%;
      }
    }

    .keyboardDescContainer {
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      /* padding-left: 15px; */

      ${getResponsiveMediaQuery('lg')} {
        margin-top: 40px;
        align-items: center;
        padding-left: 0;
      }

      .keyboardName {
        font-weight: 600;
        font-size: ${fontSize.md};
      }

      & div {
        /* border: 1px solid red; */
        padding-left: 30px;
        font-size: ${fontSize.sm};
        margin-bottom: 10px;

        ${getResponsiveMediaQuery('lg')} {
          padding-left: 0;
        }

        ${getResponsiveMediaQuery('sm')} {
          padding-left: 5px;
        }
      }

      .keyboardLearnMoreButton {
        color: black;
        font-weight: 600;
        padding: 0;
        border-radius: 10px;
        width: 120px;
        height: 35px;
        margin-left: 30px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f9f8eb;

        ${getResponsiveMediaQuery('lg')} {
          margin-left: 0px;
        }

        ${getResponsiveMediaQuery('sm')} {
        }
      }
    }
  }
`;
