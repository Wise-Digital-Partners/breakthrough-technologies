import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
   ${tw`h-full`}
   .slick-track {
      @media (min-width: 1024px) {
         ${tw`flex items-center`}
      }
   }
   .slick-slide {
      ${tw`p-0`}
      div {
         ${tw`text-center max-w-lg w-75vw mx-auto`}
         max-height: 40rem;
      }
   }
   .slick-prev,
   .slick-next {
      ${tw`top-auto md:top-1/2 -bottom-20 w-12 md:w-16 h-12 md:h-16 border border-solid border-black border-opacity-20 rounded-full mb-4 md:mb-0 transition-all duration-300 ease-linear z-10`}
      @media (max-width: 1023px) {
         ${tw`transform-none`}
      }
      &:before {
         ${tw`hidden`}
      }
      i {
         ${tw`text-black text-sm transition-all duration-300 ease-linear`}
      }
      &:hover {
         ${tw`border-opacity-100`}
         i {
            /* ${tw`text-primary-400 md:text-white`} */
         }
      }
   }
`;
const Slider = ({ slideIndex, children }) => {
   const slider = useRef();

   useEffect(() => {
      slider.current.slickGoTo(slideIndex);
   }, [slideIndex]);

   const sliderSettings = {
      dots: false,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      fade: true,
      infinite: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      responsive: [
         {
            breakpoint: 1023,
            settings: {
               adaptiveHeight: true,
            },
         },
      ],
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
         <div className="container">
            <Slick {...sliderSettings} ref={slider} className="h-full">
               {children}
            </Slick>
         </div>
      </StyledSlider>
   );
};

export default Slider;
