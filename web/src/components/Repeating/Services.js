import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import CardsWithZoomButton from "../Cards/CardsWithZoomButton";

const Services = ({ className, headingLevel, cardHeadingLevel }) => {
   const data = useStaticQuery(graphql`
      {
         estatePlanning: file(relativePath: { eq: "repeating/services/estate-planning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         businessAdvising: file(relativePath: { eq: "repeating/services/business-advising.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         carePlanning: file(relativePath: { eq: "repeating/services/long-term-care-planning.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   const cardContent = [
      {
         id: 1,
         image: data.estatePlanning.childImageSharp.gatsbyImageData,
         heading: "Estate Planning ",
         text:
            "Keep your family protected and out of court with the right legal plan. Preserve and pass on all your assets: spiritual, human, emotional, intellectual, and monetary.",
         link: "/estate-planning-small-business-owners/",
      },
      {
         id: 2,
         image: data.businessAdvising.childImageSharp.gatsbyImageData,
         heading: "Business Advising",
         text:
            "Our service-based team helps business owners and entrepreneurs. We assess and advise while our clients make all executive decisions to accomplish their goals.",
         link: "/small-business-attorney/",
      },
      {
         id: 3,
         image: data.carePlanning.childImageSharp.gatsbyImageData,
         heading: "Long Term Care Planning",
         text:
            "We'll help you put the right strategies in place to maximize protection of your family's assets from the exorbitant costs of long-term care.",
         link: "/long-term-care-planning-attorney/",
      },
   ];

   return (
      <section className={`${className || ""}`}>
         <div className="container">
            <Header
               headingLevel={headingLevel}
               heading="How We Can Help"
               subtext=""
               subtextSize=""
               textAlignment="text-center mx-auto"
               textMaxWidth="max-w-3xl"
               textMargin="mb-10 md:mb-18"
            />

            <CardsWithZoomButton
               columnCount="grid-cols-1 md:grid-cols-3"
               columnGap="gap-y-10 md:gap-y-16 md:gap-x-6 lg:gap-x-10"
               cards={cardContent}
               cardHeadingLevel={cardHeadingLevel}
               cardHeadingSize="text-3xl"
               cardHeadingClassName="heading-four"
               cardTextSize="text-sm"
            />
         </div>
      </section>
   );
};

Services.propTypes = {
   className: PropTypes.string,
   headingLevel: PropTypes.string,
   cardHeadingLevel: PropTypes.string.isRequired,
};

export default Services;
