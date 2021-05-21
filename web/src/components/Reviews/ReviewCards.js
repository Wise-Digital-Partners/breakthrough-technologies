import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    q {
      &:before,
      &:after {
        ${tw`hidden`}
      }
    }
    .masonry-item {
      ${tw`md:mx-3 lg:mx-5`}
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 70
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 76
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 95
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      houzz: file(relativePath: { eq: "reviews/houzz.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 98
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      thumbtack: file(relativePath: { eq: "reviews/thumbtack.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 124
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      headshot: file(relativePath: { eq: "reviews/User.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "",
      review: "",
      headshot: "",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-solid border-primary-600 rounded-lg mb-8 md:mb-10 p-6 md:pt-8 md:px-7 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-4">
                  <span className="text-black font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage image={review.platform} />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0">{review.review}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
