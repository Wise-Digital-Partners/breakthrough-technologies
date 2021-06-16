import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="How to Improve Cooling Tower Efficiency: ALI Water Recovery"
        description="How can you improve cooling tower efficiency? ALI by Breakthrough Technologies is a new water recovery solution for cooling towers. Learn more here."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white pt-14 md:pt-26 mb-32 md:mb-40">
        <div className="container">
          <header className="mb-14 md:mb-20 max-w-4xl">
            <h1>On The Horizon</h1>
            <p className="mb-0">
              Breakthrough Technologies maintains a number of groundbreaking
              patented and patent-pending technologies that improve
              sustainability and drive better business performance. Below are a
              number of new industrial solutions that Breakthrough Technologies
              is on the cusp of bringing to market. For more information or
              questions about these industrial solutions on the horizon, please
              contact us at{" "}
              <a
                href="mailto:info@bt-tech.com"
                className="underline whitespace-nowrap"
              >
                info@bt-tech.com
              </a>
              .
            </p>
          </header>

          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-20 gap-y-10 md:items-center mb-16 md:mb-20">
            <div className="md:col-start-1 md:col-span-5">
              <GatsbyImage
                image={data.phoenix.childImageSharp.gatsbyImageData}
              />
            </div>

            <div className="md:col-end-13 md:col-span-7">
              <h2 className="mb-2.5">
                Phoenix Pressure and Heat Exchanger (PHX)
              </h2>
              <div className="bg-primary-400 w-16 h-1 mb-6"></div>
              <p className="mb-0">
                Second only to water, concrete is the most widely-used substance
                on Earth. The process of making cement, the key ingredient in
                concrete, emits a significant amount of man-made waste heat,
                which is a major sustainability issue. To combat this global
                problem, Breakthrough Technologies created the Phoenix Pressure
                and Heat Exchanger (PHX), which involves a series of
                patent-pending thermoelectric generators or Breakthrough Cubes
                that when exposed to heat create electricity for everyday use.
                From a standard sized kiln, Phoenix can create 20MW of
                electricity, which is enough to power 10,000 homes and worth
                about $12.3 million per year. The process reduces the need to
                use carbon-intense energy sources and reuses waste heat. Future
                applications of Phoenix will include air conditioning units,
                steel mills and other industrial processes involving man-made
                waste heat.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-20 gap-y-10 md:items-center mb-16 md:mb-20">
            <div className="md:col-start-1 md:col-span-7 order-2 md:order-1">
              <h2 className="mb-2.5">SulphyPro</h2>
              <div className="bg-primary-400 w-16 h-1 mb-6"></div>
              <p className="mb-0">
                Hydrogen sulfide is a naturally occurring, yet toxic and
                corrosive impurity that is produced from decaying organic
                matter. It is created in the process of refining petroleum and
                it is also released during the fermentation of organic material
                to make biogas. Instead of using a hazardous and expensive
                purification process, Breakthrough Technologies’ innovative
                SulphyPro uses a combination of microwaves and manipulated
                ultraviolet-light waves to excite and separate hydrogen sulfide
                molecules into hydrogen and sulfur. This nascent recycled
                hydrogen can save operating costs, be burned for energy or
                tapped as a renewable transportation source.
              </p>
            </div>

            <div className="md:col-end-13 md:col-span-5 order-1 md:order-2">
              <GatsbyImage
                image={data.sulphyPro.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-20 gap-y-10 md:items-center">
            <div className="md:col-start-1 md:col-span-5">
              <GatsbyImage image={data.mep.childImageSharp.gatsbyImageData} />
            </div>

            <div className="md:col-end-13 md:col-span-7">
              <h2 className="mb-2.5">Multi-Effect Process (MEP)</h2>
              <div className="bg-primary-400 w-16 h-1 mb-6"></div>
              <p className="mb-0">
                It is estimated that over 18 trillion gallons of wastewater is
                generated in North America every year. Breakthrough
                Technologies’ groundbreaking Multi-Effect Process uses a novel
                combination of thermo-electrochemistry techniques to reduce the
                organic (COD, BOD) and inorganic (TDS, etc.) impurities in
                wastewater. This innovative process not only makes wastewater
                recyclable for industrial processes, but it also improves on an
                expensive method, the reverse-osmosis process, which requires
                significant funding, maintenance and energy. MEP allows users to
                reclaim water in industrial processes applicable to cane sugar,
                bio-digesters, textiles, fats and oils and petrochemicals. The
                system also allows users to reclaim remaining solids as
                fertilizer and gas as energy. With MEP, a typical midsize
                industrial site can reclaim enough water to save a million
                dollars a year in sewage charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RecentBlogPosts className="mb-20 md:mb-40" />
      <CallToAction headingLevel="h2" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage_FB.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage_TW.jpg" }
    ) {
      publicURL
    }
    phoenix: file(relativePath: { eq: "on-the-horizon/1.0 Phoenix.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    sulphyPro: file(relativePath: { eq: "on-the-horizon/2.0 SulphyPro.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    mep: file(relativePath: { eq: "on-the-horizon/3.0 MEP.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
