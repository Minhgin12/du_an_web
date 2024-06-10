
import React from 'react'
import { Image } from 'antd';
import {  WrapperSliderStyle } from './style';


const SliderComponent = ({ arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
      };
    return (
        <WrapperSliderStyle {...settings}>
            {
                arrImages.map((image) => {
                    return (
                    <Image src={image} 
                    alt="slider"
                    preview={false}
                    width="99%"
                    height="400px" 
                    />
                    )
                })
            }
        </WrapperSliderStyle> 
    )
}

export default SliderComponent