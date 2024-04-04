/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { getResponsiveMediaQuery } from './../../GlobalStyles';

export const Home = styled.section`
  .carouselImages {
    width: 100%;
    height: 700px;
    object-fit: cover;
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
      ${getResponsiveMediaQuery('lg')} {
        width: 100%;
      }
      width: 60%;
    }

    .keyboardDescContainer {
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 15px;

      ${getResponsiveMediaQuery('lg')} {
        margin-top: 40px;
        flex-direction: column;
        align-items: center;
      }

      ${getResponsiveMediaQuery('sm')} {
        margin-top: 40px;
        flex-direction: column;
        align-items: flex-start;
      }

      .keyboardName {
        font-weight: 600;
        font-size: 30px;
      }

      & div {
        ${getResponsiveMediaQuery('sm')} {
          padding-left: 5px;
        }
        /* border: 1px solid red; */
        padding-left: 30px;
        font-size: 25px;
        margin-bottom: 10px;
      }

      .keyboardLearnMoreButton {
        padding: 0;
        /* border: 1px solid red; */
        border-radius: 10px;
        width: 200px;
        height: 60px;
        margin-left: 30px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f9f8eb;
      }
    }
  }
`;
