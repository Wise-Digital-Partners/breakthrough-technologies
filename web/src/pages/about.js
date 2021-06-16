import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

const Page = ({ data }) => {
  const ourMissionBgImages = [
    getImage(data.ourMissionDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.ourMissionMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Layout>
      <SearchEngineOptimization
        title="About Breakthrough Technologies | Industrial Tech Company"
        description="Boston-based Breakthrough Technologies is led by a world-class engineering team that believes in the power of innovation to change the world."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-white relative pt-4 mb-10">
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
                  Born from a small group of visionary engineers, physicists and
                  business leaders near Massachusetts Institute of Technology in
                  Cambridge, our founders created Breakthrough Technologies to
                  produce innovative products that provide significant cost
                  savings to businesses and solve global environmental and
                  sustainability problems. With each breakthrough solution, we
                  seek to partner with world-class companies to dramatically
                  transform industrial processes and deliver positive social and
                  environmental change around the world.
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

      <section className="bg-white pt-14 md:pt-32 mb-20 md:mb-36">
        <div className="container">
          <header className="mb-8 md:mb-12">
            <TextDecorative
              text="Company Leadership"
              desktopAlignment="center"
              mobileAlignment="center"
            />
          </header>
          <div className="grid md:grid-cols-3 md:gap-x-5 gap-y-10 md:items-center">
            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(0)}
              >
                <GatsbyImage
                  image={data.irwin.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Irwin Heller</div>
                <div className="text-xl">Chief Executive Officer</div>
              </div>
            </div>

            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(1)}
              >
                {/* <GatsbyImage
                  image={data.teamMember.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                /> */}
                <img
                  src="http://via.placeholder.com/772x772?text=FPO"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Kamal Jaffrey</div>
                <div className="text-xl">Chief Technology Officer</div>
              </div>
            </div>

            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(2)}
              >
                <GatsbyImage
                  image={data.jeff.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Jeffery J. Mahaffey</div>
                <div className="text-xl">Chief Operating Officer</div>
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

      <OurTeam className="mb-20 md:mb-40" headingLevel="h2" />
      <RecentBlogPosts className="mb-20 md:mb-40" />
      <CallToAction headingLevel="h2" />

      <ModalTeamMembers slideIndex={slideIndex}>
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.irwin.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Irwin Heller</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Chief Executive Officer
                </p>
                <a href="# " target="_blank">
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                Chief Executive Officer Irwin M. Heller is the architect of
                Breakthrough Technologies growth strategy. Possessing a strong
                business and legal mind, Heller established the company’s
                visionary physics-based energy and water sustainability ethos
                and assembled a senior leadership team that could deliver
                scalable, proprietary and industrial solutions at a global
                level. Prior to Breakthrough Technologies, Heller served as
                chief executive officer of Twin Rivers Technologies (TRT), a
                leading manufacturer of oils, fats, oleochemicals and biodiesel,
                which was successfully sold to the Federal Land Development
                Authority or FELDA, the world’s largest producer of crude palm
                oil. In addition to his strong business acumen, Heller is a
                former managing partner at Mintz Levin, a premier legal and
                consulting solutions provider for energy technology innovators,
                where he devoted a significant portion of his practice to
                representing early-stage companies in technology and
                sustainability-related industries. Heller is a graduate of
                Columbia University Law School and Tufts University, where he is
                a trustee emeritus. Heller also serves as an advisor to Tufts
                University Friedman School of Nutrition Science and Policy and
                an advisor to the Beth Israel Deaconess Medical Center, a
                world-class teaching hospital of Harvard Medical School.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                {/* <GatsbyImage
                  image={data.teamMember.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                /> */}
                <img
                  src="http://via.placeholder.com/772x772?text=FPO"
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Kamal Jaffrey</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Chief Technology Officer
                </p>
                <a href="# " target="_blank">
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                Serving as the chief technology officer for Breakthrough
                Technologies, Kamal Jaffrey is a dynamic innovator and global
                problem solver. Jaffery’s ingenuity is at the core of nearly
                every Breakthrough Technologies solution, which has been honed
                over his twenty years of experience in leading technology
                research and development labs to develop game-changing
                industrial products. In addition to Breakthrough Technologies,
                Jaffrey is the founder of Delta Search Labs in Cambridge, where
                he designed high-performance supercomputing centers and created
                the world’s first commercialized immersive virtual-reality space
                that enables companies to build virtual prototypes instead of
                costly and inaccurate physical prototypes. Jaffrey holds a
                concurrent engineering and management degree from Western
                International University and graduate and undergraduate degrees
                from Arizona State University and is a registered professional
                engineer. In addition to holding multiple U.S. and international
                patents and post-graduate studies and work at the Massachusetts
                Institute of Technology (MIT) and Harvard University, Jaffery
                also maintains research and teaching appointments at the MIT
                School of Engineering and Harvard Medical School in Boston.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.jeff.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Jeffery J. Mahaffey</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Chief Operating Officer
                </p>
                <a href="# " target="_blank">
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                A longtime executive with strong roots in business, economics
                and biochemistry, Jeffery J. Mahaffey is the chief operating
                officer of Breakthrough Technologies and is responsible for
                almost every aspect of the core business functions, from running
                day-to-day operations to leading strategic initiatives and major
                corporate decisions. Prior to Breakthrough Technologies,
                Mahaffey formed and led a joint venture with HB International
                (HBI) of Paris, an international brokerage company that
                negotiates deals on behalf of businesses and professionals in
                the oleochemicals industry. Before serving as managing director
                at HBI USA, Mahaffey served as chief operating officer of Global
                Bio Chem Technology Group of China, where he developed and
                commercialized bio-based glycols and built a commercial
                organization to market these products in the U.S. and Europe
                with more than $30 million in annual sales. He was also vice
                president and general manager for Oleochemicals and Surfactants
                at Cognis in North America, where he drove over $400 million in
                sales. Mahaffey’s early career includes nearly 25 years of
                executive management and global marketing experience at Henkel,
                a multi-billion-dollar company specializing in well-known soap,
                haircare products and adhesive brands and leading multinational
                conglomerate Procter & Gamble.
              </p>
            </div>
          </div>
        </div>
      </ModalTeamMembers>
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
    teamMember: file(relativePath: { eq: "about/2.0 Team Member.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    irwin: file(relativePath: { eq: "about/irwin.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    jeff: file(relativePath: { eq: "about/jeff.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
