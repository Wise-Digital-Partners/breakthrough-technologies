import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Background from "../Background/Background";
import TextDecorative from "../Text/TextDecorative";
import ButtonWithIcon from "../Button/ButtonWithIcon";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/our-team/Our team - desktop (1).jpg" }
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
        relativePath: { eq: "repeating/our-team/Our Team - mobile (1).jpg" }
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
      media: `(max-width: 767px)`,
    },
  ];

  const HeadingTag = headingLevel;

  return (
    <Background
      className={`${className || ""}`}
      backgroundImages={backgroundImages}
      // backgroundPosition=""
      padding="pt-36 md:pt-44 pb-32 md:pb-48"
    >
      <div className="max-w-5xl mx-auto">
        <TextDecorative
          className="text-center"
          darkmode={true}
          text="The Team"
          desktopAlignment="center"
          mobileAlignment="center"
        />

        <HeadingTag className="text-center text-white mb-8">
          Who We Are
        </HeadingTag>
        <p className="text-left md:text-center text-white mb-5">
          Boston-based Breakthrough Technologies is led by a world-class
          engineering team managed by one of Massachusetts Institute of
          Technology’s brightest engineers. Unlike any other sustainable
          technology company, our engineers utilize physics to solve
          sustainability problems with industrial production processes. This
          unique approach ultimately leads to cleaner, cost-saving sustainable
          solutions.
        </p>
        <div className="text-center">
          <ButtonWithIcon darkmode={true} href="/about/" text="Learn More" />
        </div>
      </div>
    </Background>
  );
};

export default About;
