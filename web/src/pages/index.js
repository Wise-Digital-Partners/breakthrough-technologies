import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import HeroFullWidth from "../components/Hero/HeroFullWidth";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  // const heroFullWidthImages = [
  //   getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
  //   {
  //     ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
  //     media: `(max-width: 767px)`,
  //   },
  // ];

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Sustainable Technology Company | Breakthrough Technologies"
        description="Breakthrough Technologies is a sustainable technology company that builds innovative industrial products to improve water & energy sustainability."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <HeroFullWidth
        // backgroundImages={heroFullWidthImages}
        padding="pt-52 md:pt-60 pb-20 md:pb-104"
        textMaxWidth="max-w-4xl mx-auto text-center"
      >
        <p className="font-heading text-mobile-8xl md:text-8xl font-bold text-white uppercase mb-6 md:mb-2">
          Improve Sustainability.
          <br /> Drive Better Business Performance.
        </p>
      </HeroFullWidth>

      <section className="bg-white mb-44 md:mb-32">
        <div className="container">
          <header className="max-w-4xl mx-auto text-center">
            <TextDecorative
              text="Our Mission"
              desktopAlignment="center"
              mobileAlignment="center"
            />
            <h1 className="text-mobile-5xl md:text-5xl mb-0">
              We build innovative industrial products that improve water and
              energy sustainability and drive better business performance.
            </h1>
          </header>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-x-4 gap-y-2 lg:items-center">
            <div className="lg:h-[560px]">
              <div className="lg:absolute lg:left-0 lg:w-50vw lg:h-full">
                <BgImage
                  className="hidden lg:block lg:h-full"
                  image={data.introDesktop.childImageSharp.gatsbyImageData}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "100% 0%",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <GatsbyImage
                  image={data.introMobile.childImageSharp.gatsbyImageData}
                  className="lg:hidden -mx-4"
                />
                <div className="bg-white w-52 transform rotate-45"></div>
              </div>
            </div>
            <div className="lg:text-center">
              <h2>
                We’re a sustainability technology company focused on creating
                value for business.
              </h2>
              <p className="mb-0">
                Population growth and climate change continue to stress natural
                resources around the world. To overcome these challenges,
                industrial processes must become more efficient. Breakthrough
                Technologies is a Boston-based company that builds innovative
                industrial products that improve water and energy sustainability
                and drive better business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mb-22 md:mb-32">
        <div className="container">
          <header className="max-w-4xl mx-auto text-center">
            <TextDecorative
              text="The Latest BREAKTHROUGH TECHNOLOGY"
              desktopAlignment="center"
              mobileAlignment="center"
            />
          </header>

          <div className="relative mb-7 md:mb-20">
            <GatsbyImage
              image={data.aliVideo.childImageSharp.gatsbyImageData}
            />
            <header className="absolute top-0 right-0 left-0 bottom-0 m-auto text-center flex items-center justify-center flex-col px-4">
              <h2 className="text-white mb-10">
                ALI: A Water Recovery Solution for Cooling Towers
              </h2>

              <button className="group flex justify-center items-center space-x-3 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  className="w-11 h-11"
                >
                  <path
                    className="group-hover:fill-current text-primary-400 transition-colors duration-300 ease-linear"
                    d="M3.5,24C3.5,12.7,12.7,3.5,24,3.5S44.5,12.7,44.5,24S35.3,44.5,24,44.5S3.5,35.3,3.5,24z M20.2,16.3
	c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.4,0.2-0.4,0.6v14.7c0,0.4,0.3,0.6,0.4,0.6c0.1,0,0.5,0.2,0.8-0.2l10.6-7.3c0.1-0.1,0.2-0.3,0.2-0.5
	c0-0.2-0.1-0.4-0.2-0.5l-10.6-7.3C20.5,16.3,20.4,16.3,20.2,16.3z"
                    stroke="#FFF"
                    fill="transparent"
                  />
                </svg>

                <div className="text-white font-semibold">Play Video</div>
              </button>
            </header>
          </div>

          <div className="flex justify-between flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-10">
            <div className="lg:max-w-xl">
              <h2 className="mb-1">ALI: A Water Recovery Solution</h2>
              <p className="uppercase text-gray-300">
                AQUA LIQUEFACTION WITH IONIZATION
              </p>
              <p>
                ALI, Aqua Liquefaction with Ionization, is our leading
                proprietary technology for cooling towers. ALI uses
                specially-designed ductwork over cooling towers to capture
                evaporating water. Without using heat or chemicals, ALI
                condenses and recovers at least 90 percent of your escaping
                water and eliminates the concentration of dissolved solids in
                your system. Our proprietary and patented technology only
                requires one day for installation and involves no moving parts,
                which means minimal maintenance and operating expenses.
              </p>
              <ButtonWithIcon
                href="/how-to-improve-cooling-tower-efficiency/"
                text="Learn More"
                className="hidden md:inline-flex"
              />
            </div>

            <div>
              <p className="font-heading text-gray-900 font-bold text-xl">
                The Benefits
              </p>

              <ul className="flex flex-col space-y-1 mb-7 md:mb-0">
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">
                    recover at least 90 percent of water loss
                  </span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">
                    eliminate chemical water treatments
                  </span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">eliminate blow down </span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">eliminate plume rise</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">lower operating costs</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">increase sustainability</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">create peace of mind</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <i className="fal fa-chevron-double-right text-primary-400 text-sm"></i>
                  <span className="font-medium">ease of installation</span>
                </li>
              </ul>

              <ButtonWithIcon
                href="/how-to-improve-cooling-tower-efficiency/"
                text="Learn More"
                className="md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

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
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero Mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introDesktop: file(relativePath: { eq: "home/02 Home - desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introMobile: file(relativePath: { eq: "home/2.0 home - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    aliVideo: file(relativePath: { eq: "home/3.0 ALI video - desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
