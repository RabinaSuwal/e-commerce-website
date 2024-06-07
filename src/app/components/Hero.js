"use client";
import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {
  var settings = {
    dots : true,
    infinite : true,
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    pauseOnHover : false,
  };
  
  const slideData = [
    {
      id : 0,
      img : "https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : "Trending Items",
      mainTitle : "WOMEN LATEST FASHION SALE",
      price : "Rs. 800",
    },
    {
      id : 1,
      img : "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title : "Trending Accessories",
      mainTitle : "WOMEN SUNGLASSES ",
      price : "Rs. 500",
    },
    {
      id : 2,
      img : "https://images.pexels.com/photos/234220/pexels-photo-234220.jpeg",
      title : "Sale Offer",
      mainTitle : "NEW FASHION SUMMER SALE",
      price : "Rs. 700",
    },
  ];
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
          <Slider{...settings}>
            {slideData.map((item) => (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            ))}
          </Slider>
      </div>
    </div>
  )
}

export default Hero