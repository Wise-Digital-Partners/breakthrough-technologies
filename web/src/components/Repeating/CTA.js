import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import CTAFullWidth from "../CTA/CTAFullWidth";

const CTA = ({ heading, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/cta/CTA desktop.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/cta/CTA mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
          )
        }
      }
    }
  `);

  const backgroundImages = [
    getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 640px)`,
    },
  ];

  const HeadingTag = headingLevel;

  return (
    <CTAFullWidth
      className="mb-2"
      backgroundImages={backgroundImages}
      backgroundSize="cover"
      backgroundPosition="100% 0"
      padding="pt-56 sm:pt-8 pb-24 sm:pb-6"
      textAlignment=""
      textMaxWidth=""
    >
      <div className="grid sm:grid-cols-12">
        <div className="sm:col-start-1 sm:col-span-8 text-center sm:text-left">
          <div className="px-5 sm:px-0">
            <HeadingTag className="text-white text-mobile-7xl sm:text-7xl font-black uppercase">
              {heading || "Partner With Us"}
            </HeadingTag>
            <p className="text-xl text-white">
              Learn more about Nouvel Technologies and our innovative industrial
              products.
            </p>
          </div>
          <ButtonSolid
            className="w-full sm:w-auto"
            as="button"
            modal="modal-contact"
            text="Contact Us"
          />
        </div>
      </div>
    </CTAFullWidth>
  );
};

export default CTA;
