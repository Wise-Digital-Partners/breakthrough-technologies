import React from "react";
import Masonry from "react-masonry-component";
import styled from "@emotion/styled";
import tw from "twin.macro";

import ReviewCards from "./ReviewCards";

export const Reviews = ({ gridLayout }) => {
   const StyledReviews = styled.div`
      .masonry-grid {
         ${tw`md:-mx-3 lg:-mx-5 -mb-8 md:-mb-10 lg:-mb-12`}
      }
   `;
   const masonryOptions = {
      itemSelector: ".masonry-item",
      horizontalOrder: true,
   };

   let gridClass = null;

   if (gridLayout === "masonry") {
      gridClass = "masonry-grid";
   } else {
      gridClass = "grid";
   }

   return (
      <div>
         <StyledReviews>
            <Masonry className={`${gridClass}`} options={masonryOptions}>
               <ReviewCards gridLayout={gridLayout} />
            </Masonry>
         </StyledReviews>
      </div>
   );
};

export default Reviews;
