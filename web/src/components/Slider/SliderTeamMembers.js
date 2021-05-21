import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
// import tw from 'twin.macro'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
   .slick-list {
      overflow: inherit;
   }
`;
const Slider = ({ slideIndex, children }) => {
   const slider = useRef();

   useEffect(() => {
      slider.current.slickGoTo(slideIndex);
   }, [slideIndex]);

   const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: false,
      fade: true,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
   };

   // Previous Arrow
   function PrevArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-prev" aria-label="Previous Slide">
            <i className="far fa-chevron-left"></i>
         </button>
      );
   }

   // Next Arrow
   function NextArrow(props) {
      const { onClick } = props;
      return (
         <button onClick={onClick} className="slick-next" aria-label="Next Slide">
            <i className="far fa-chevron-right"></i>
         </button>
      );
   }

   return (
      <StyledSlider>
         <div className="container p-0">
            <Slick {...sliderSettings} ref={slider} className="h-full">
               {children}
            </Slick>
         </div>
      </StyledSlider>
   );
};

export default Slider;
