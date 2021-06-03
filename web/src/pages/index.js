import React, { useRef, useState, useLayoutEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonWithIcon from "../components/Button/ButtonWithIcon";
import ModalVideo from "../components/Modal/ModalVideo";

const Page = ({ data }) => {
  const [animated, setAnimated] = useState(["0px", "-16px"]);
  const [animatedMobile, setAnimatedMobile] = useState(["0px", "-16px"]);

  const bounceTransition = {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2.0;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY > 0;

      if (scrolled) {
        setAnimated(["0px", "0px"]);
        setAnimatedMobile(["0px", "0px"]);
      } else {
        setAnimated(["0px", "-16px"]);
        setAnimatedMobile(["0px", "-16px"]);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [animated, animatedMobile]);

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Sustainable Technology Company | Breakthrough Technologies"
        description="Breakthrough Technologies is a sustainable technology company that builds innovative industrial products to improve water & energy sustainability."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      {/* start animated hero section */}

      <section className="relative pt-44 md:pt-0">
        <BgImage
          className="md:hidden h-full w-full left-0 top-0"
          image={data.heroMobile.childImageSharp.gatsbyImageData}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
          }}
        />

        <ParallaxProvider>
          <div className="absolute w-full h-full">
            <AnchorLink to="/#our-mission">
              <motion.img
                src={data.scrollArrow.publicURL}
                alt="Scroll arrow"
                transition={bounceTransition}
                animate={{ y: animated }}
                width="26px"
                className="sticky md:top-[90vh] mx-auto hidden md:block z-10"
              />
            </AnchorLink>
          </div>

          <div
            className="hidden md:block absolute h-full w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 52.08%, #FFFFFF 89.58%), linear-gradient(180deg, rgba(4, 29, 92, 0.5) 0%, rgba(39, 39, 39, 0.11) 90.01%)",
            }}
          ></div>

          <video
            ref={videoRef}
            onCanPlay={() => setPlayBack()}
            width="100%"
            autoPlay
            muted
            loop
            className="hidden md:block"
          >
            <source
              src="https://player.vimeo.com/external/553558824.hd.mp4?s=bb947885e9d7f245075a2ca6e7d334a4643abb39&profile_id=175"
              type="video/mp4"
            />
          </video>

          <Parallax
            y={[35, -25]}
            className="hidden md:block absolute top-0 left-0 w-full h-full"
          >
            <GatsbyImage image={data.cloud1.childImageSharp.gatsbyImageData} />
          </Parallax>

          <Parallax
            y={[50, 0]}
            className="hidden md:block absolute top-0 left-0 w-full h-full"
          >
            <GatsbyImage image={data.cloud2.childImageSharp.gatsbyImageData} />
          </Parallax>

          <div className="hidden md:block absolute -bottom-80 left-0 w-full h-full">
            <GatsbyImage image={data.cloud1.childImageSharp.gatsbyImageData} />
          </div>

          <Parallax
            y={[50, -50]}
            className="hidden md:block absolute top-[25%] left-[20vw]"
          >
            <GatsbyImage image={data.cloud3.childImageSharp.gatsbyImageData} />
          </Parallax>

          <Parallax
            y={[50, 0]}
            className="hidden sm:block md:hidden absolute bottom-0 w-full"
          >
            <GatsbyImage
              image={data.cloud1Mobile.childImageSharp.gatsbyImageData}
            />
          </Parallax>

          <Parallax y={[25, 0]} className="sm:hidden absolute bottom-0 w-full">
            <GatsbyImage
              image={data.cloud1Mobile.childImageSharp.gatsbyImageData}
            />
          </Parallax>

          <Parallax y={[0, 0]} className="xs:hidden absolute bottom-0 w-full">
            <GatsbyImage
              image={data.cloud1Mobile.childImageSharp.gatsbyImageData}
            />
          </Parallax>

          <Parallax
            y={[50, 0]}
            className="md:hidden absolute bottom-[43%] right-[8vw]"
          >
            <GatsbyImage
              image={data.cloud2Mobile.childImageSharp.gatsbyImageData}
            />
          </Parallax>

          <header className="relative md:absolute md:top-[18%] md:left-0 md:right-0 m-auto text-center max-w-4xl md:max-w-5xl mx-auto h-full px-4 z-10">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.75 }}
              className="font-heading text-white font-black uppercase tracking-wider text-mobile-8xl lg:text-8xl mb-16 md:mb-6 opacity-0"
            >
              Improve Sustainability.
              <br />
              Drive Better Business Performance.
            </motion.p>
          </header>

          <AnchorLink to="/#our-mission">
            <motion.img
              src={data.scrollArrow.publicURL}
              alt="Scroll arrow"
              transition={bounceTransition}
              animate={{ y: animatedMobile }}
              width="26px"
              className="sticky top-72 mx-auto md:hidden"
            />
          </AnchorLink>
        </ParallaxProvider>
        <div className="bg-white h-72 md:h-72 md:relative md:-top-12"></div>
      </section>

      {/* end animated hero section */}

      <section id="our-mission" className="bg-white mb-44 md:mb-32 relative">
        <div className="container">
          <header className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800 w-5 h-px mx-auto"></div>
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
              className="hidden md:block"
            />
            <header className="md:absolute md:top-0 md:right-0 md:left-0 md:bottom-0 md:m-auto text-center md:flex md:items-center md:justify-center md:flex-col md:px-4">
              <h2 className="md:text-white mb-8 md:mb-10">
                ALI: A Water Recovery Solution for Cooling Towers
              </h2>

              <div className="relative">
                <GatsbyImage
                  image={data.aliVideo.childImageSharp.gatsbyImageData}
                  className="md:hidden -mx-4"
                />

                <button
                  className="group flex justify-center items-center space-x-3 focus:outline-none absolute md:relative top-0 right-0 left-0 bottom-0 m-auto z-10"
                  data-modal-open="modal-video"
                >
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
              </div>
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
                proprietary technology that improves cooling towers. ALI uses
                specially-designed ductwork over cooling towers to capture
                evaporating water. Without using heat or chemicals, ALI
                condenses and recovers 90 percent of your evaporating water and
                eliminates the concentration of dissolved solids in your system.
                Our proprietary and patented technology only requires one day
                for installation and involves no moving parts, which means
                minimal maintenance and operating expenses.
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

              <ul className="list-disc ml-6 flex flex-col space-y-1 mb-7 md:mb-0">
                <li className="font-medium">
                  Recover at least 90 percent of water loss
                </li>
                <li className="font-medium">
                  Eliminate chemical water treatments
                </li>
                <li className="font-medium">Eliminate blow down</li>
                <li className="font-medium">Eliminate plume rise</li>
                <li className="font-medium">Lower operating costs</li>
                <li className="font-medium">Increase sustainability</li>
                <li className="font-medium">Create peace of mind</li>
                <li className="font-medium">Ease of installation</li>
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

      <ModalVideo />
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
    heroMobile: file(relativePath: { eq: "home/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    scrollArrow: file(relativePath: { eq: "home/scroll arrow.svg" }) {
      publicURL
    }
    cloud1: file(relativePath: { eq: "home/1.1 Clouds - desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
      }
    }
    cloud2: file(relativePath: { eq: "home/1.3 Smoke - desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
      }
    }
    cloud3: file(relativePath: { eq: "home/1.4 single cloud - desktop.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 301
          placeholder: NONE
          quality: 100
        )
      }
    }
    cloud1Mobile: file(relativePath: { eq: "home/1.1 clouds - mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, quality: 100)
      }
    }
    cloud2Mobile: file(
      relativePath: { eq: "home/1.2 single cloud - mobile.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 191
          placeholder: NONE
          quality: 100
        )
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
