import React from 'react';
import * as Styles from './Home.styled';
import Carousel from 'react-bootstrap/Carousel';
import luminKey65 from '../../assets/luminkey65.jpg';
import luminKey75 from '../../assets/luminkey75.png';
import luminKey80 from '../../assets/luminkey80.png';
import { introKeyboardInfo } from '.';

const Home = () => {
  const handleNavigatePage = () => {
    console.log('1');
  };

  return (
    <Styles.Home>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img src={luminKey65} className="carouselImages" onClick={handleNavigatePage} />
          <Carousel.Caption>
            <h3>Luminkey65</h3>
            <p>65% layout, compact and refined.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={luminKey75} className="carouselImages" />
          <Carousel.Caption>
            <h3>Luminkey75</h3>
            <p>75% layout, balancing practicality and compact design.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={luminKey80} className="carouselImages" />
          <Carousel.Caption>
            <h3>Luminkey80</h3>
            <p>80% layout, meets your daily needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {introKeyboardInfo.map((KeyboardItem, index) => {
        console.log(KeyboardItem);
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
