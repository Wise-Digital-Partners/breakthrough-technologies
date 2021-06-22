import React, { useRef, useEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionItem,
  // AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
// import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ModalVideo from "../components/Modal/ModalVideo";

const Page = ({ data }) => {
  const questionsAnswers = [
    {
      question: "Does ALI interfere with normal cooling tower operations?",
      answer:
        "No, ALI does not interfere with cooling tower operations and operates independently from existing systems. It fits over the top of the cooling tower with its own steel support structure and maintains existing access points.",
    },
    {
      question: "Does ALI inhibit air flow from the cooling tower exhaust?",
      answer:
        "No, ALI’s patent-pending design improves air flow by removing moisture, straightening the air flow and creating a venturi effect, which increases airflow toward the exhaust.",
    },
    {
      question: "Is ALI patented?",
      answer:
        "ALI is patent-pending. Breakthrough Technologies filed patents in the U.S. and additional jurisdictions abroad.",
    },
    {
      question: "Does ALI require a lot of maintenance?",
      answer:
        "Due to the fact that ALI does not involve any moving parts, ALI only requires one inspection and cleaning per year.",
    },
    {
      question:
        "Does ALI reduce the use of chemicals to treat water in the cooling tower system?",
      answer:
        "Since ALI returns evaporated water to the cooling tower, the concentration of impurities at the basin or sump is reduced. This results in fewer blowdowns or the removal of impurities and reduced chemical use.",
    },
  ];
  // const [accordionOpen1, setAccordionOpen1] = useState("block"),
  //   [accordionOpen2, setAccordionOpen2] = useState("hidden"),
  //   [accordionOpen3, setAccordionOpen3] = useState("hidden");

  const [refStep1, inViewStep1] = useInView({ threshold: 0.5 }),
    [refStep2, inViewStep2] = useInView({ threshold: 0.5 }),
    [refStep3, inViewStep3] = useInView({ threshold: 0.5 }),
    [refStep4, inViewStep4] = useInView({ threshold: 0.5 });

  const animationStep1 = useAnimation(),
    animationDot1 = useAnimation(),
    animationStep2 = useAnimation(),
    animationDot2 = useAnimation(),
    animationStep3 = useAnimation(),
    animationDot3 = useAnimation(),
    animationStep4 = useAnimation(),
    animationDot4 = useAnimation();

  useEffect(() => {
    if (inViewStep1) {
      animationStep1.start("visible");
      animationDot1.start("visibleDot");
    }
    if (inViewStep2) {
      animationStep2.start("visible");
      animationDot2.start("visibleDot");
    }
    if (inViewStep3) {
      animationStep3.start("visible");
      animationDot3.start("visibleDot");
    }
    if (inViewStep4) {
      animationStep4.start("visible");
      animationDot4.start("visibleDot");
    }
  }, [
    animationStep1,
    animationDot1,
    animationStep2,
    animationDot2,
    animationStep3,
    animationDot3,
    animationStep4,
    animationDot4,
    inViewStep1,
    inViewStep2,
    inViewStep3,
    inViewStep4,
  ]);

  const variants = {
    visible: {
      opacity: 1,
      x: "0px",
      transition: { duration: 1 },
    },
    hidden: {
      opacity: 0,
    },
    visibleDot: {
      opacity: 1,
      width: "1.75rem",
      height: "1.75rem",
      transition: { duration: 1 },
    },
    hiddenDot: {
      opacity: 0,
      width: "0rem",
      height: "0rem",
    },
    hiddenLeft: {
      opacity: 0,
      x: "-100px",
    },
    hiddenRight: {
      opacity: 0,
      x: "100px",
    },
  };

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="How to Improve Cooling Tower Efficiency: ALI Water Recovery"
        description="How can you improve cooling tower efficiency? ALI by Breakthrough Technologies is a new water recovery solution for cooling towers. Learn more here."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="relative pt-8 md:pt-40 lg:pt-64 md:pb-40 lg:pb-64">
        <BgImage
          className="hidden md:block left-0 top-0 h-full w-full"
          image={data.heroDesktop.childImageSharp.gatsbyImageData}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            position: "absolute",
          }}
        />

        <div className="container relative">
          <header className="md:max-w-2xl mb-7">
            <h1 className="md:text-white">
              ALI: A Water Recovery Solution for Cooling Towers
            </h1>
          </header>

          <div className="relative">
            <GatsbyImage
              image={data.heroMobile.childImageSharp.gatsbyImageData}
              className="md:hidden -mx-4"
            />

            <div className="absolute md:relative top-0 right-0 left-0 bottom-0 text-center flex justify-center md:justify-start">
              <button
                className="group flex justify-center items-center space-x-3 focus:outline-none"
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
          </div>
        </div>
      </section>

      <section className="bg-white pt-14 md:pt-32 mb-44 md:mb-36">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-12 gap-y-10 md:items-center">
            <div>
              <header>
                <TextDecorative
                  text="About the solution"
                  desktopAlignment="left"
                  mobileAlignment="center"
                />
                <h2 className="lg:mb-12">
                  Improve Your Cooling Tower Efficiency
                </h2>
                <p className="mb-0">
                  ALI, Aqua Liquefaction with Ionization, is our leading
                  patent-pending technology for cooling towers. ALI uses
                  specially-designed ductwork over cooling towers to capture
                  evaporating water. Without using heat or chemicals under
                  normal cooling tower operations, ALI condenses and recovers
                  90% of your evaporating water and eliminates the concentration
                  of solid and liquid impurities in your system. Our
                  patent-pending technology only requires one day for
                  installation and involves no moving parts, which means minimal
                  maintenance and operating expenses.
                </p>
              </header>
            </div>

            <div>
              <GatsbyImage
                image={data.introDesktop.childImageSharp.gatsbyImageData}
                className="hidden md:block"
              />
              <GatsbyImage
                image={data.introMobile.childImageSharp.gatsbyImageData}
                className="md:hidden -mx-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-44">
        <div className="container">
          <TextDecorative
            text="Features"
            desktopAlignment="center"
            mobileAlignment="center"
          />
          <header className="mb-18 text-center md:text-left">
            <h2>The Benefits of ALI</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex flex-col space-y-12 md:space-y-16">
              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon1.publicURL}
                  alt="Recover at least 90% of water loss"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Recover at least 90% of water loss.
                  </p>
                  <p className="mb-0">
                    Under normal cooling tower operations, ALI captures and
                    recovers more than 90% of evaporative water which may save
                    you millions of dollars in operating expenses.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon2.publicURL}
                  alt="Reduce chemical treatments"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Reduce chemical treatments.
                  </p>
                  <p className="mb-0">
                    ALI reduces the need for expensive chemicals to treat water
                    impurities and bacteria by recovering and recycling water.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <img src={data.benfitsIcon3.publicURL} alt="Reduce blow down" />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Reduce blow down.
                  </p>
                  <p className="mb-0">
                    Recycling clean, evaporated water reduces sewage discharge
                    and wastewater disposal.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon4.publicURL}
                  alt="Eliminate plume rise"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Eliminate plume rise.
                  </p>
                  <p className="mb-0">
                    ALI contains and redirects the plume, which can spread
                    bacteria and diseases into the atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-12 md:space-y-16">
              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon5.publicURL}
                  alt="Lower energy costs"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Lower energy costs.
                  </p>
                  <p className="mb-0">
                    ALI’s patent-pending duct system increases the efficiency of
                    cooling tower system fans. This allows each fan to pull with
                    less energy, which reduces operating costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon6.publicURL}
                  alt="Plug-and-play innovation"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    Plug-and-play innovation.
                  </p>
                  <p className="mb-0">
                    ALI’s plug-and-play technology connects to your existing
                    cooling tower system, which allows for easy installation and
                    maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <img
                  src={data.benfitsIcon7.publicURL}
                  alt="A smart investment"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-gray-800 mb-3 md:mb-4">
                    A smart investment.
                  </p>
                  <p className="mb-0">
                    From recovering water to lowering energy use, ALI will
                    provide a return on investment in as little as two to three
                    years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative">
        <div className="absolute w-full h-full mt-48">
          <img
            src={data.blueTriangle.publicURL}
            alt="Brand triangle"
            width="26"
            className="hidden md:block left-0 right-0 mx-auto z-10 sticky top-56"
          />
        </div>
        <div className="container">
          <TextDecorative
            text="The Science"
            desktopAlignment="center"
            mobileAlignment="center"
          />
          <header className="mb-18 text-center md:text-left">
            <h2>How It Works</h2>
          </header>

          <div className="relative">
            <div className="hidden md:block w-px bg-black bg-opacity-30 h-full absolute left-0 right-0 mx-auto"></div>
            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-14 items-center mb-14 md:mb-20">
              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={
                    data.howItWorksDesktop1.childImageSharp.gatsbyImageData
                  }
                  alt="The Conventional Process"
                  className="hidden md:block"
                />
                <GatsbyImage
                  image={data.howItWorksMobile1.childImageSharp.gatsbyImageData}
                  alt="The Conventional Process"
                  className="md:hidden"
                />
              </motion.div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenRight"
                variants={variants}
              >
                <p className="font-heading text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-2.5">
                  Step One
                </p>
                <div className="bg-primary-400 w-16 h-1 mb-2"></div>
                <p className="md:text-lg text-gray-900 uppercase tracking-[0.3em] font-light mb-4">
                  The Conventional Process
                </p>
                <p className="mb-0">
                  Traditional cooling tower systems use water to extract waste
                  heat and eject it into the atmosphere. In these towers, humid
                  air carries warm water vapor out of each tower. Many cooling
                  towers also utilize a sump, or basin, that collects water and
                  impurities that over time lead to corrosion and bacteria
                  growth. Many cooling tower systems control these issues by
                  adding more water and chemicals.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-14 md:mb-20">
              <motion.div
                className="order-2 md:order-1"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenLeft"
                variants={variants}
              >
                <p className="font-heading text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-2.5">
                  Step Two
                </p>
                <div className="bg-primary-400 w-16 h-1 mb-2"></div>
                <p className="md:text-lg text-gray-900 uppercase tracking-[0.3em] font-light mb-4">
                  Splitting
                </p>
                <p className="mb-0">
                  ALI’s technology adds a patent-pending duct system above the
                  existing cooling tower that condenses and recovers evaporating
                  water. The duct system splits and straightens the airflow
                  using psychrometrics, which prevents back pressure and reduces
                  turbulence.
                </p>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={
                    data.howItWorksDesktop2.childImageSharp.gatsbyImageData
                  }
                  alt="Splitting"
                  className="hidden md:block"
                />
                <GatsbyImage
                  image={data.howItWorksMobile2.childImageSharp.gatsbyImageData}
                  alt="Splitting"
                  className="md:hidden"
                />
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center mb-14 md:mb-20">
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenLeft"
                variants={variants}
              >
                <GatsbyImage
                  image={
                    data.howItWorksDesktop3.childImageSharp.gatsbyImageData
                  }
                  alt="Coalesce and Condense"
                  className="hidden md:block"
                />
                <GatsbyImage
                  image={data.howItWorksMobile3.childImageSharp.gatsbyImageData}
                  alt="Coalesce and Condense"
                  className="md:hidden"
                />
              </motion.div>
              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenRight"
                variants={variants}
              >
                <p className="font-heading text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-2.5">
                  Step Three
                </p>
                <div className="bg-primary-400 w-16 h-1 mb-2"></div>
                <p className="md:text-lg text-gray-900 uppercase tracking-[0.3em] font-light mb-4">
                  Coalesce and Condense
                </p>
                <p className="mb-0">
                  The duct system's airflow is then directed to an ionization
                  and cloud chamber, where a carefully controlled electric field
                  causes the water molecules to coalesce and condense into
                  larger droplets.
                </p>
              </motion.div>
            </div>

            <div className="relative grid md:grid-cols-2 md:gap-x-24 gap-y-6 items-center">
              <motion.div
                className="order-2 md:order-1"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenLeft"
                variants={variants}
              >
                <p className="font-heading text-mobile-4xl md:text-4xl text-gray-900 font-bold mb-2.5">
                  Step Four
                </p>
                <div className="bg-primary-400 w-16 h-1 mb-2"></div>
                <p className="md:text-lg text-gray-900 uppercase tracking-[0.3em] font-light mb-4">
                  Return and Exhaust
                </p>
                <p className="mb-0">
                  The condensed, clean water is returned to the basin, and the
                  remaining air exits through the exhaust. The recovered and
                  recycled water is now available for reuse in the water cooling
                  system.
                </p>
              </motion.div>
              <motion.div
                className="order-1 md:order-2"
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenRight"
                variants={variants}
              >
                <GatsbyImage
                  image={
                    data.howItWorksDesktop4.childImageSharp.gatsbyImageData
                  }
                  alt="Return and Exhaust"
                  className="hidden md:block"
                />
                <GatsbyImage
                  image={data.howItWorksMobile4.childImageSharp.gatsbyImageData}
                  alt="Return and Exhaust"
                  className="md:hidden"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-32">
        <div className="bg-white h-20 md:h-48"></div>
        <div className="container">
          <div className="bg-gray-800 w-5 h-px mx-auto hidden md:block"></div>
          <TextDecorative
            text="Our Partners"
            desktopAlignment="center"
            mobileAlignment="center"
          />

          <div className="flex items-center justify-center space-x-10 lg:space-x-20">
            <a href="https://www.fortistar.com/" target="_blank" rel="noreferrer">
            <GatsbyImage
              image={data.fortistar.childImageSharp.gatsbyImageData}
            />
            </a>
            <a href="https://www.coolingtechnology.org/" target="_blank" rel="noreferrer">
            <GatsbyImage image={data.cti.childImageSharp.gatsbyImageData} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white relative mb-20 md:mb-24">
        <div className="container">
          <TextDecorative
            text="Frequently Asked Questions"
            desktopAlignment="center"
            mobileAlignment="center"
          />
          {/* <header className="mb-10 md:mb-14 text-center">
            <h2>Frequently Asked Questions</h2>
          </header> */}

          <div className="max-w-3xl mx-auto">
            <Accordion
              allowZeroExpanded={true}
              className="border-t border-solid border-black border-opacity-30"
            >
              {questionsAnswers.map((faq, i) => {
                return (
                  <div key={i}>
                    <AccordionItem
                      className="border-b border-solid border-black border-opacity-30 pt-6 pb-5"
                      uuid={i}
                    >
                      <AccordionItemButton className="flex items-center focus:outline-none">
                        <AccordionItemState>
                          {(state) => {
                            const icon = state.expanded
                              ? "fa-minus"
                              : "fa-plus";
                            return (
                              <i
                                className={`fal ${icon} text-xl text-primary-400 mr-6`}
                              ></i>
                            );
                          }}
                        </AccordionItemState>

                        <p className="font-heading text-lg font-bold text-gray-800 mb-0">
                          {faq.question}
                        </p>
                      </AccordionItemButton>
                      <AccordionItemPanel className="pt-4 pl-10 animate-fadeIn">
                        <p className="mb-0">{faq.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
          {/* </div> */}
        </div>
      </section>

      <OurTeam className="mb-10 md:mb-10" headingLevel="h2" />
      {/* <RecentBlogPosts className="mb-20 md:mb-40" /> */}
      <CallToAction headingLevel="h2" />
      <ModalVideo vidRef={vidRef} />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/ALI.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/ALI.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "ALI/1.0 video hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    heroMobile: file(relativePath: { eq: "ALI/1.0 video hero - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introDesktop: file(relativePath: { eq: "ALI/2.0 About - desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    introMobile: file(relativePath: { eq: "ALI/2.0 About - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    benfitsIcon1: file(relativePath: { eq: "ALI/3.0 benefit 1.svg" }) {
      publicURL
    }
    benfitsIcon2: file(relativePath: { eq: "ALI/3.1 benefit 2.svg" }) {
      publicURL
    }
    benfitsIcon3: file(relativePath: { eq: "ALI/3.2 benefit 3.svg" }) {
      publicURL
    }
    benfitsIcon4: file(relativePath: { eq: "ALI/3.3 benefit 4.svg" }) {
      publicURL
    }
    benfitsIcon5: file(relativePath: { eq: "ALI/3.4 benefit 5.svg" }) {
      publicURL
    }
    benfitsIcon6: file(relativePath: { eq: "ALI/3.5 benefit 8.svg" }) {
      publicURL
    }
    benfitsIcon7: file(relativePath: { eq: "ALI/3.6 benefit 7.svg" }) {
      publicURL
    }
    blueTriangle: file(relativePath: { eq: "ALI/2.1 blue triangle.svg" }) {
      publicURL
    }
    howItWorksDesktop1: file(relativePath: { eq: "ALI/4.1 Step one.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksMobile1: file(
      relativePath: { eq: "ALI/4.1 Step one - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksDesktop2: file(relativePath: { eq: "ALI/4.2 Step two.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksMobile2: file(
      relativePath: { eq: "ALI/4.2 Step two - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksDesktop3: file(relativePath: { eq: "ALI/4.3 Step three.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksMobile3: file(
      relativePath: { eq: "ALI/4.3 Step three- mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksDesktop4: file(relativePath: { eq: "ALI/4.4 Step four.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    howItWorksMobile4: file(
      relativePath: { eq: "ALI/4.4 step four - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsDesktop1: file(
      relativePath: { eq: "ALI/5.1 Sustainability.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsMobile1: file(
      relativePath: { eq: "ALI/5.1 Sustainability - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsDesktop2: file(
      relativePath: { eq: "ALI/5.2 Economics.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsMobile2: file(
      relativePath: { eq: "ALI/5.2 Economics - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsDesktop3: file(
      relativePath: { eq: "ALI/5.3 Availability.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    companyBenefitsMobile3: file(
      relativePath: { eq: "ALI/5.3 Availability - mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    fortistar: file(relativePath: { eq: "ALI/fortistar-logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 200
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    cti: file(relativePath: { eq: "ALI/cti-logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 115
          placeholder: BLURRED
          quality: 100
        )
      }
    }
  }
`;
export default Page;
