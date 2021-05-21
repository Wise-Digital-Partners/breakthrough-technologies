import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";

const WhyUs = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      empowering: file(
        relativePath: { eq: "repeating/why-us/Empowering icon.svg" }
      ) {
        publicURL
      }
      holistic: file(
        relativePath: { eq: "repeating/why-us/Holistic icon.svg" }
      ) {
        publicURL
      }
      ongoing: file(relativePath: { eq: "repeating/why-us/Ongoing icon.svg" }) {
        publicURL
      }
      relational: file(
        relativePath: { eq: "repeating/why-us/Relational icon.svg" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <Header
          headingLevel={headingLevel}
          heading="Our Unique Approach"
          subtext=""
          subtextSize=""
          textAlignment="text-center md:text-left"
          textMaxWidth=""
          textMargin="mb-6 md:mb-10"
        />
        <div className="grid grid-cols-2 gap-x-6 md:gap-x-16 lg:gap-x-24 gap-y-8 md:gap-y-10">
          <div>
            <img
              src={data.holistic.publicURL}
              alt="Holistic"
              className="mx-auto md:mx-0 mb-2"
            />
            <p className="font-display text-mobile-5xl md:text-5xl text-gray-800 mb-6 md:mb-3 text-center md:text-left">
              Holistic
            </p>
            <p className="text-sm md:text-base mb-0">
              We ensure you make informed and empowered decisions with
              everything you need to consciously plan for your life and beyond.
            </p>
          </div>
          <div>
            <img
              src={data.ongoing.publicURL}
              alt="Ongoing"
              className="mx-auto md:mx-0 mb-2"
            />
            <p className="font-display text-mobile-5xl md:text-5xl text-gray-800 mb-6 md:mb-3 text-center md:text-left">
              Ongoing
            </p>
            <p className="text-sm md:text-base mb-0">
              We nurture lifelong relationships with clients and provide
              continuous quality counsel and support as needed.
            </p>
          </div>
          <div>
            <img
              src={data.empowering.publicURL}
              alt="Empowering"
              className="mx-auto md:mx-0 mb-2"
            />
            <p className="font-display text-mobile-5xl md:text-5xl text-gray-800 mb-6 md:mb-3 text-center md:text-left">
              Empowering
            </p>
            <p className="text-sm md:text-base mb-0">
              Breakthrough Technologies, APC manifests a strong ethical and
              spiritual foundation. We practice compassion, integrity, and
              peace-building.
            </p>
          </div>
          <div>
            <img
              src={data.relational.publicURL}
              alt="Relational"
              className="mx-auto md:mx-0 mb-2"
            />
            <p className="font-display text-mobile-5xl md:text-5xl text-gray-800 mb-6 md:mb-3 text-center md:text-left">
              Relational
            </p>
            <p className="text-sm md:text-base mb-0">
              We'll be on your family's side for the short and long term, and
              serve as your trusted advisor and Personal Family Lawyer for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
