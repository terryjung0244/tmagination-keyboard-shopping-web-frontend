import React from 'react';
import * as Styles from './Home.styled';
import Carousel from 'react-bootstrap/Carousel';
import hyper from '../../assets/hyper.png';
import apex7 from '../../assets/apex7.png';
import redragon from '../../assets/redragon.png';
import { introKeyboardInfo } from '.';
import VideoClip from './videoClip/VideoClip';

const Home = () => {
  const handleNavigatePage = () => {};

  return (
    <Styles.Home>
      <VideoClip />
      <Carousel style={{}}>
        <Carousel.Item interval={2500}>
          <img src={hyper} className="carouselImages" onClick={handleNavigatePage} />
          <Carousel.Caption>
            <h3>Varon65</h3>
            <p>65% layout, compact and refined.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={apex7} className="carouselImages" />
          <Carousel.Caption>
            <h3>Varon75</h3>
            <p>75% layout, balancing practicality and compact design.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={redragon} className="carouselImages" />
          <Carousel.Caption>
            <h3>Varon80</h3>
            <p>80% layout, meets your daily needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {introKeyboardInfo.map((KeyboardItem, index) => {
        return (
          <div className="keyboardIntroSection" key={index}>
            <img className="keyboardImage" src={KeyboardItem.image} />
            <div className="keyboardDescContainer">
              <div className="keyboardName">{KeyboardItem.name}</div>
              <div className="keyboardDescLayout">{KeyboardItem.description.layout}</div>
              <div className="keyboardDescDesign">{KeyboardItem.description.design}</div>
              <div className="keyboardDescWeight">{KeyboardItem.description.weight}</div>
              <div className="keyboardLearnMoreButton">Learn more</div>
            </div>
          </div>
        );
      })}
    </Styles.Home>
  );
};

export default Home;
