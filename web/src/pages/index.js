import React, { useRef, useState, useLayoutEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
// import { ParallaxProvider } from "react-scroll-parallax";
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
import triangleRed from "../images/global/Red-Triangle.svg";
import triangleWhite from "../images/global/outiline-white-traingle.svg";
import blackBlueChevron from "../images/global/black-blue-chevron.svg";
import item001 from "../images/home/item-001.svg";
import item002 from "../images/home/item-002.svg";
import item003 from "../images/home/item-003.svg";
import item004 from "../images/home/item-004.svg";
import item005 from "../images/home/item-005.svg";
import item006 from "../images/home/item-006.svg";
import item007 from "../images/home/item-007.svg";

const aliItems = [
  {
    label: "Recovers most evaporative water loss",
    icon: item001,
  },
  {
    label: "Reduce water treatment chemicals ",
    icon: item002,
  },
  {
    label: "Reduce blowdown ",
    icon: item003,
  },
  {
    label: "Eliminate plume rise",
    icon: item004,
  },
  {
    label: "Lower operating costs",
    icon: item005,
  },
  {
    label: "Increase sustainability",
    icon: item006,
  },
  {
    label: "Minimize disruption with one-day installation",
    icon: item007,
  },
];
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

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  return (
    <Layout headerStyle="overlap" headerLinkColor="white">
      <SearchEngineOptimization
        title="Sustainable Technology Company | Breakthrough Technologies"
        description="Breakthrough Technologies is a sustainable technology company that builds innovative industrial products to improve water & energy sustainability."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      {/* start animated hero section */}

      <section className="relative pt-32 md:pt-0">
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

        <div
          className="absolute h-full w-full top-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.17) 30.88%)",
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
            src="https://player.vimeo.com/external/560179441.hd.mp4?s=2cac835eb56a07ff7b8e5bc23b70de1081c1d416&profile_id=175"
            type="video/mp4"
          />
        </video>

        <header className="relative md:absolute md:top-0 md:left-0 md:right-0 m-auto text-center max-w-4xl md:max-w-5xl mx-auto h-full md:pt-[15%] px-4 z-10">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.75 }}
            className="font-heading text-white font-black uppercase tracking-wider text-mobile-8xl lg:text-8xl mb-20 md:mb-20 opacity-0 relative"
            style={{ textShadow: "0px 2px 40px rgba(0, 0, 0, 0.4)" }}
          >
            Transforming Green Energy Into
            <br />
            Economic Growth
          </motion.p>

          <AnchorLink to="/#our-mission">
            <motion.img
              src={data.scrollArrow.publicURL}
              alt="Scroll arrow"
              transition={bounceTransition}
              animate={{ y: animated }}
              width="26px"
              className="sticky md:top-[50vh] mx-auto z-20 hidden md:block"
            />
          </AnchorLink>
        </header>

        <AnchorLink to="/#our-mission">
          <motion.img
            src={data.scrollArrow.publicURL}
            alt="Scroll arrow"
            transition={bounceTransition}
            animate={{ y: animatedMobile }}
            width="26px"
            className="sticky top-72 mx-auto md:hidden z-20"
          />
        </AnchorLink>

        <img
          src={data.heroDivider.publicURL}
          alt="Hero divider"
          className="absolute bottom-[13.9rem] md:bottom-[13.9rem] w-full"
        />
        <div className="bg-white h-56 md:h-56 relative"></div>
      </section>

      {/* end animated hero section */}

      <section id="our-mission" className="bg-white mb-44 md:mb-72 relative">
        <div className="container">
          <header className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800 w-5 h-px mx-auto"></div>
            <TextDecorative
              text="Our Mission"
              desktopAlignment="center"
              mobileAlignment="center"
            />
            <h1 className="text-mobile-5xl md:text-5xl mb-0 mt-4">
              We build innovative industrial products that improve water and
              energy sustainability and drive better business performance.
            </h1>
          </header>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-52">
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
              <h2>The Future of Sustainable Industry Starts Here</h2>
              <img
                src={triangleRed}
                alt="Brand triangle"
                className={`block mx-auto mb-2.5 `}
              />
              <p className="mb-0">
                Population growth and climate change continue to stress natural
                resources around the world. Overcoming these challenges requires
                leadership, collaboration, and forward-thinking solutions.
              </p>
              <p className="mb-0">
                That is what Nouvel Technologies offers—innovative industrial
                products that improve water and energy sustainability while
                optimizing efficiency.
              </p>
              <p className="mb-0">
                With a robust patent portfolio, partnerships with investment
                firms like Foristar, and new technologies on the horizon, we're
                set to redefine industrial sustainability in 2025 and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-[104px] px-4 lg:px-0">
        <div className="max-w-[561px] mx-auto lg:max-w-[1200px]">
          <div className="flex flex-col gap-y-[14px] items-center">
            <img
              src={triangleWhite}
              alt="Brand triangle"
              className={`block mx-auto mb-2.5 `}
            />
            <div className="font-heading text-[18px] text-white uppercase">
              The Latest Technology
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="text-[160px] font-heading text-center font-black text-white lg:text-[200px]">
              ALI
            </div>
            <div className="text-[#E6E6E6] font-heading text-xl leading-[130%]">
              Aqua Liquefaction with Ionization
            </div>
            <img
              src={blackBlueChevron}
              alt="Brand triangle"
              className={`block mx-auto `}
            />
            <div className="font-heading font-bold text-[26px] text-center text-white">
              Improving Cooling Tower Efficiency
            </div>
            <div className=" font-heading leading-[26px] text-[#CCC] text-start">
              ALI, Aqua Liquefaction with Ionization, is our leading proprietary
              technology that improves cooling towers. ALI uses specially
              designed ductwork over cooling towers to capture evaporating
              water. Without using heat or chemicals, ALI condenses and recovers
              most evaporative water loss and eliminates the concentration of
              dissolved solids in your system. Our proprietary and patented
              technology only requires minimal installation and downtime and
              involves no moving parts, which means minimal maintenance and
              operating expenses.
            </div>
            <div className="flex flex-col gap-y-5 items-start">
              {aliItems.map((item, index) => (
                <div key={index} className="flex gap-x-3 items-center">
                  <img src={item.icon} alt="" className={`block mx-auto `} />
                  <div className="text-white font-heading leading-[26px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="how-to-improve-cooling-tower-efficiency"
              className="text-white font-heading font-medium leading-[26px]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white mb-22 md:mb-40">
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
                  onClick={handlePlayVideo}
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
              <h3 className="mb-1">Improving Cooling Tower Efficiency</h3>
              <p className="uppercase text-gray-300">
                AQUA LIQUEFACTION WITH IONIZATION
              </p>
              <p>
                ALI, Aqua Liquefaction with Ionization, is our leading
                patent-pending technology that improves cooling towers. ALI uses
                specially-designed ductwork over cooling towers to capture
                evaporating water. Without using heat or chemicals under normal
                cooling tower operations, ALI condenses and recovers 90% of your
                evaporating water and eliminates the concentration of solid and
                liquid impurities in your system. Our patent-pending technology
                only requires one day for installation and involves no moving
                parts, which means minimal maintenance and operating expenses.
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
                <li className="font-medium">Recover 90% of water loss</li>
                <li className="font-medium">
                  Reduce water treatment chemicals
                </li>
                <li className="font-medium">Reduce blowdown </li>
                <li className="font-medium">Eliminate plume rise</li>
                <li className="font-medium">Lower operating costs</li>
                <li className="font-medium">Increase sustainability</li>
                <li className="font-medium">Easy installation</li>
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

      <OurTeam className="mb-10 md:mb-10" headingLevel="h2" />
      <RecentBlogPosts className="mb-20 md:mb-40" />
      <CallToAction headingLevel="h2" />
      <ModalVideo vidRef={vidRef} />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero V3 - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    scrollArrow: file(relativePath: { eq: "home/scroll arrow.svg" }) {
      publicURL
    }
    heroDivider: file(relativePath: { eq: "home/1.1 hero delta.svg" }) {
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
