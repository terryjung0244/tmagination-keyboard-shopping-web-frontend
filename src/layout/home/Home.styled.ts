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
      width: 60%;
    }

    .keyboardDescContainer {
      /* border: 1px solid red; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      ${getResponsiveMediaQuery('lg')} {
        margin-top: 40px;
        flex-direction: column;
        align-items: center;
      }

      .keyboardName {
        font-weight: 600;
        font-size: 30px;
      }

      & div {
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
