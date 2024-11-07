import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`h-14 w-14 border border-solid border-gray-300 rounded-full -bottom-24 md:bottom-auto`}
    @media (max-width: 767px) {
      ${tw`top-auto transform-none`}
    }
    i {
      ${tw`text-3xl text-gray-300`}
    }
    &:hover {
      ${tw`text-gray-600`}
    }
  }
  .slick-prev {
    ${tw`left-1/2! -ml-18 md:ml-auto md:left-auto! md:right-0 md:mt-10`}
  }
  .slick-next {
    ${tw`right-1/2! md:right-0! -mr-18 md:mr-auto md:-mt-10`}
  }
  /* .slick-dots {
      ${tw`relative! mt-6`}
      li {
         &.slick-active {
            button {
               ${tw`bg-white`}
            }
         }
      }
      button {
         ${tw`bg-white bg-opacity-40`}
      }
   } */
  blockquote {
    ${tw`md:pr-24`}
  }
  q {
    ${tw`text-lg md:text-xl font-heading text-gray-800 font-bold`}
    &:before,
      &:after {
      ${tw`hidden`}
    }
  }
  footer {
    span {
      /* ${tw`block text-gray-50`} */
    }
    cite {
      /* ${tw`text-sm md:text-base opacity-80 not-italic`} */
    }
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      quote: file(
        relativePath: { eq: "repeating/testimonials/Quotation Mark.svg" }
      ) {
        publicURL
      }
      google: file(relativePath: { eq: "repeating/testimonials/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 95, quality: 100)
        }
      }
    }
  `);

  const HeadingTag = headingLevel;

  return (
    <section
      className={`bg-gray-50 pt-12 md:pt-18 pb-36 md:pb-16 ${className}`}
    >
      <div className="container">
        <StyledSlider className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-16">
            <div className="md:col-start-1 md:col-span-2 md:flex md:items-center md:justify-center">
              <header className="mb-10 md:mb-0 md:transform md:-rotate-90 text-center">
                <HeadingTag className="text-7xl font-normal font-display text-gray-300">
                  Testimonials
                </HeadingTag>
              </header>
            </div>
            <div className="md:col-end-13 md:col-span-10">
              <img
                src={data.quote.publicURL}
                alt="Quotation mark"
                className="mx-auto md:mx-0 mb-6 md:mb-12"
              />
              <Slider>
                <div>
                  <blockquote>
                    <q>
                      I was looking for an experienced estate planning attorney
                      who could thoroughly explain all of the many options to me
                      about how to plan for my future, and that of my clients.
                      Alanna is not only thorough but thoughtful, and approaches
                      things with a holistic explanation and all of the options
                      to fully plan for the future. I recommend her highly!
                    </q>
                    <footer className="mt-10">
                      <span>
                        <cite className="text-primary-600 uppercase not-italic">
                          Tristen C. - Del Mar
                        </cite>
                        <GatsbyImage
                          image={data.google.childImageSharp.gatsbyImageData}
                          alt="Google logo"
                          className="mt-4"
                        />
                      </span>
                    </footer>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <q>
                      I have relied on Alanna's legal services for years, I
                      could not imagine a better lawyer to be honest. Over the
                      years I have worked with a handful of lawyers, but none
                      come close to being as well-rounded as Alanna. Not only is
                      she incredibly knowledgeable and professional, but the
                      true care she brings to every conversation or situation is
                      something you can't put a price on. Rather than treating
                      you like a client, she treats you like a friend and gives
                      top quality advice and guidance every step of the way. I
                      can't recommend Nouvel Technologies enough!
                    </q>
                    <footer className="mt-10">
                      <span>
                        <cite className="text-primary-600 uppercase not-italic">
                          Bradon Y. - La Mesa
                        </cite>
                        <GatsbyImage
                          image={data.google.childImageSharp.gatsbyImageData}
                          alt="Google logo"
                          className="mt-4"
                        />
                      </span>
                    </footer>
                  </blockquote>
                </div>
                <div>
                  <blockquote>
                    <q>
                      My family used Breakthrough Technologies to set up a trust
                      and will.Their process was extremely comprehensive and
                      family centered. Not only were all our questions answered,
                      the step by step process they have created really makes
                      things user friendly. No one ever wants to talk about what
                      happens if the worst happens, and Alana and Liz made it so
                      comfortable. Highly recommend their services.
                    </q>
                    <footer className="mt-10">
                      <span>
                        <cite className="text-primary-600 uppercase not-italic">
                          Jenny L. - Oceanside
                        </cite>
                        <GatsbyImage
                          image={data.google.childImageSharp.gatsbyImageData}
                          alt="Google logo"
                          className="mt-4"
                        />
                      </span>
                    </footer>
                  </blockquote>
                </div>
              </Slider>
            </div>
          </div>
        </StyledSlider>
      </div>
    </section>
  );
};

export default Testimonial;
