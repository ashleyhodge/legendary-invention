import React from 'react';
import { Carousel } from '3d-react-carousal';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Shop from '../../assets/images/shopping.png';
import Make from '../../assets/images/making.png';
import Blog from '../../assets/images/blogging.png';


const HeroCarousel = () => {

  let slides = [
    <img src={Shop} alt="shopping" className='w-[700px] h-[300px]'/>,
    <img src={Make} alt="making" className='w-[700px] h-[300px] '/>,
    <img src={Blog} alt="blogging" className='w-[700px] h-[300px]'/>,
  ];

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <div className='hidden sm:inline'>
        <Carousel slides={slides} autoplay={true} interval={5000} arrows={false}/>
      </div>
      <div className='sm:hidden z-0'>
        <AutoplaySlider
          bullets={false}
          organicArrows={true}
          infinite={true}
          play={true}
          interval={5000}
        >
          <div data-src={Shop}  />
          <div data-src={Make} />
          <div data-src={Blog} />
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default HeroCarousel;