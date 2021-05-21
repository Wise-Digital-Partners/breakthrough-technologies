import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledHero = styled.section`
   .container {
      ${({ hasContainer }) => (hasContainer ? null : tw`px-0 md:px-6`)};
   }
   .text-wrapper {
      ${({ hasContainer }) => (hasContainer ? null : tw`px-6 md:px-0`)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/4" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-3` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/4" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-3` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/3" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-4` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/3" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-4` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "2/5" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-5` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "2/5" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-5` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/2" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-6` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "1/2" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-6` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "3/5" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-7` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "3/5" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-7` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "2/3" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-8` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "2/3" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-8` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "3/4" && imageAlignment === "left" ? tw`md:col-end-13 md:col-span-9` : null)};
      ${({ textWidth, imageAlignment }) => (textWidth === "3/4" && imageAlignment === "right" ? tw`md:col-start-1 md:col-span-9` : null)};
      ${({ imageAlignment }) => (imageAlignment === "left" ? tw`order-2` : tw`order-2 md:order-1`)};
   }
   .image-wrapper {
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/4" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-3` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/4" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-3` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/3" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-4` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/3" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-4` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "2/5" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-5` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "2/5" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-5` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/2" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-6` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "1/2" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-6` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "3/5" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-7` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "3/5" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-7` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "2/3" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-8` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "2/3" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-8` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "3/4" && imageAlignment === "left" ? tw`md:col-start-1 md:col-span-9` : null)};
      ${({ imageWidth, imageAlignment }) => (imageWidth === "3/4" && imageAlignment === "right" ? tw`md:col-end-13 md:col-span-9` : null)};
      ${({ imageAlignment }) => (imageAlignment === "left" ? tw`order-1` : tw`order-1 md:order-2`)};
   }
`;

const StyledBackgroundImage = styled(BgImage)`
   ${({ imageAlignment }) => (imageAlignment === "left" ? tw`md:-translate-x-full md:left-full` : tw`md:translate-x-0`)};
`;

const Hero = ({
   className,
   padding,
   hasContainer,
   textWidth,
   imageWidth,
   imageAlignment,
   textAlignment,
   image,
   imageMaxHeight,
   backgroundSize,
   backgroundPosition,
   backgroundRepeat,
   children,
}) => {
   return (
      <StyledHero
         className={`${padding} ${className}`}
         hasContainer={hasContainer}
         textWidth={textWidth}
         imageWidth={imageWidth}
         imageAlignment={imageAlignment}
      >
         <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
               <header className={`text-wrapper ${textAlignment}`}>{children}</header>
               <div className={`image-wrapper ${imageMaxHeight}`}>
                  {hasContainer ? (
                     <GatsbyImage image={image} alt="" />
                  ) : (
                     <StyledBackgroundImage
                        className="h-75vw md:w-50vw transform"
                        image={image}
                        imageAlignment={imageAlignment}
                        imageMaxHeight={imageMaxHeight}
                        style={{
                           backgroundSize: backgroundSize || "cover",
                           backgroundPosition: backgroundPosition || "center",
                           backgroundRepeat: backgroundRepeat || "no-repeat",
                        }}
                     />
                  )}
               </div>
            </div>
         </div>
      </StyledHero>
   );
};

export default Hero;
