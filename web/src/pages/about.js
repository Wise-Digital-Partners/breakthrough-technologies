import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  const ourMissionBgImages = [
    getImage(data.ourMissionDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.ourMissionMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="About Breakthrough Technologies | Industrial Tech Company"
        description="Boston-based Breakthrough Technologies is led by a world-class engineering team that believes in the power of innovation to change the world."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white relative pt-4 mb-10 lg:mb-14">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-x-4 lg:items-center">
            <div className="order-2 lg:order-1">
              <header>
                <TextDecorative
                  text="Who We Are"
                  desktopAlignment="left"
                  mobileAlignment="center"
                />
                <h1>About Breakthrough Technologies</h1>
                <p className="mb-0">
                  At Breakthrough Technologies, our talented engineers believe
                  in the power of innovation to change the world. Natural
                  resources such as water and energy are precious, and we create
                  industrial solutions that establish sustainability. Our team
                  transforms vision into reality and gets results that make a
                  difference.
                </p>
              </header>
            </div>

            <div className="lg:h-[560px] order-1 lg:order-2">
              <div className="lg:absolute lg:right-0 lg:w-50vw lg:h-full">
                <BgImage
                  className="hidden lg:block lg:h-full"
                  image={data.heroDesktop.childImageSharp.gatsbyImageData}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "0% 0%",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <GatsbyImage
                  image={data.heroMobile.childImageSharp.gatsbyImageData}
                  className="lg:hidden -mx-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BgImage
        className="pt-22 md:pt-60 pb-36 md:pb-64"
        image={ourMissionBgImages}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <TextDecorative
            text="Our Mission"
            desktopAlignment="center"
            mobileAlignment="center"
          />
          <header className="max-w-3xl mx-auto text-center">
            <h2 className="mb-0">
              We build innovative industrial products that improve water and
              energy sustainability and drive better business performance.
            </h2>
          </header>
        </div>
      </BgImage>

      <OurTeam className="mb-20 md:mb-32" headingLevel="h2" />

      <RecentBlogPosts className="mb-20 md:mb-32" />

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
    heroDesktop: file(
      relativePath: { eq: "about/1.0 About Hero - desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(relativePath: { eq: "about/1.0 Hero - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    ourMissionDesktop: file(
      relativePath: { eq: "about/2.0 mission - desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    ourMissionMobile: file(
      relativePath: { eq: "about/2.0 mission - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
