import React from 'react';
import { Carousel } from '3d-react-carousal';
import Shop from '../../assets/images/shopping.png';
import Make from '../../assets/images/making.png';
import Blog from '../../assets/images/blogging.png';

const HeroCarousel = () => {

  let slides = [
    <img src={Shop} alt="shopping" className='w-[700px] h-[300px]'/>,
    <img src={Make} alt="making" className='w-[400px] h-[300px]'/>,
    <img src={Blog} alt="blogging" className='w-[400px] h-[300px]'/>,
  ];

  return (
    <Carousel slides={slides} autoplay={false} interval={4000} />
  )
}

export default HeroCarousel;