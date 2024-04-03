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
      <div>
        <div className="imagesAndDescription">
          <img src={luminKey65} className="introImages" />
          <div className="description">
            <li>65% layout, compact and refined</li>
            <li>Minimalist design</li>
            <li>Iconic copper weight & badge</li>
          </div>
        </div>
        <div>
          <img src={luminKey75} className="introImages" />
          <div className="description">
            <li>75% layout, balancing practicality and compact design</li>
            <li>Rounded corner design</li>
            <li>Brass weight</li>
          </div>
        </div>
        <div>
          <img src={luminKey80} className="introImages" />
          <div className="description">
            <li>80% layout, meets your daily needs</li>
            <li>Retro minimalist design</li>
            <li>Iconic copper weight & badge</li>
          </div>
        </div>
      </div>
      {introKeyboardInfo.map((KeyboardItem, index) => {
        return (
          <div key={index}>
            <img src={KeyboardItem.image.firstImage} />
          </div>
        );
      })}
    </Styles.Home>
  );
};

export default Home;
