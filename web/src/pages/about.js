import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import TextDecorative from "../components/Text/TextDecorative";
import OurTeam from "../components/Repeating/OurTeam";
// import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
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
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
                  Born from a group of visionary engineers, physicists and
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
                <GatsbyImage
                  image={data.teamMember.childImageSharp.gatsbyImageData}
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
          <div className="mt-24 mb-2 md:mb-3">
            <TextDecorative
              text="Board of Directors"
              desktopAlignment="center"
              mobileAlignment="center"
            />
          </div>
          <div className="grid md:grid-cols-4 md:gap-x-2 gap-y-10 md:items-center">
            {/* item 4 */}
            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(3)}
              >
                <GatsbyImage
                  image={data.nadeem.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Nadeem Nisar</div>
                <div className="text-lg">Board Member</div>

              </div>
            </div>
            {/* end of item 4 */}
            {/* item 5 */}
            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(4)}
              >
                <GatsbyImage
                  image={data.chuck.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Chuck Bryceland</div>
                <div className="text-lg">Board Member</div>

              </div>
            </div>
            {/* end of item 5*/}
            {/* item 6 */}
            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(5)}
              >
                <GatsbyImage
                  image={data.newsha.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Newsha K. Ajami </div>
                <div className="text-lg">Board Member</div>

              </div>
            </div>
            {/* end of item 6*/}
            {/* item 7 */}
            <div>
              <button
                className="group w-full overflow-hidden mb-6 focus:outline-none"
                aria-label="Modal trigger"
                data-modal-open="modal-team-members"
                onClick={() => setSlideIndex(6)}
              >
                <GatsbyImage
                  image={data.graham.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Graham Beesley</div>
                <div className="text-lg">Board Member</div>

              </div>
            </div>
            {/* end of item 7*/}
          </div>
        </div>
      </section>

      <BgImage
        className="pt-22 pb-36 md:pb-64"
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

      <OurTeam className="mb-10 md:mb-10" headingLevel="h2" />
      {/* <RecentBlogPosts className="mb-20 md:mb-40" /> */}
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
                <a
                  href="https://www.linkedin.com/in/irwin-heller-7bb25a13/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Irwin Heller</b> is <b>the CEO/Board Member</b> and architect of Breakthrough Technologies growth strategy. He previously served as CEO of Twin Rivers Technologies, a leading manufacturer of oils, fats, oleochemicals and biodiesel, which was successfully sold to FELDA, the world’s largest producer of crude palm oil. Irwin is also a former managing partner at Mintz Levin, one of the 50 largest law firms in the United States. He is a graduate of Columbia University Law School and Tufts University, where he is a trustee emeritus. Irwin also serves as an advisor to Tufts University Friedman School of Nutrition Science and Policy and an advisor to the Beth Israel Deaconess Medical Center, a world-class teaching hospital of Harvard Medical School.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.teamMember.childImageSharp.gatsbyImageData}
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
              </header>
              <p className="mb-0">
                <b>Kamal Jaffrey</b> is the <b>CTO</b> and innovator at the core of every Breakthrough Technologies innovation. He previously served as founder of Delta Search Labs in Cambridge, where he designed high-performance supercomputing centers. Kamal holds a concurrent engineering and management degree from Western International University and graduate and undergraduate degrees from Arizona State University. In addition to holding multiple U.S. and international patents and post-graduate studies and work at MIT and Harvard University, Kamal also maintains research and teaching appointments at the MIT School of Engineering and Harvard Medical School in Boston.
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
                <a
                  href="https://www.linkedin.com/in/jeffery-mahaffey-7397071a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Jeff Mahaffey</b> is the <b>COO</b> and leader of Breakthrough Technologies commercial execution plan. He previously formed and led a joint venture with HB International (HBI) of Paris, an international brokerage company that negotiates deals on behalf of businesses in the oleochemical industry. Before serving as managing director at HBI USA, Jeff served as COO of Global Bio Chem Technology Group of China, where he developed and commercialized bio-based glycols. Jeff’s early career includes twenty-five years of executive management experience at Henkel and Procter & Gamble. He is a graduate of Emory University with degrees in Economics, Chemistry & Physics, and German.
              </p>
            </div>
          </div>
        </div>
        {/* model item 4 */}
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.nadeem.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Nadeem Nisar</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member                </p>

                {/* <a
                  href="https://www.linkedin.com/in/jeffery-mahaffey-7397071a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a> */}
              </header>
              <p className="mb-0">
                <b>Nadeem Nisar</b> has been serving as a Managing Director of Fortistar since July 2008, where he serves as head of their investment team. He is a member of Fortistar’s management and investment committees which oversee the operations of Fortistar’s portfolio companies. He also serves on the board of several of Fortistar’s portfolio companies, including Fortistar Sustainable Solutions Corp, Carbonfree Chemicals LLC, Braven Environmental and Pellucere Technologies.
              </p>
            </div>
          </div>
        </div>
        {/* end of model item 4 */}        
        {/* model item 5 */}
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.nadeem.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">
                  Chuck Bryceland</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member                </p>
                {/* <a
                  href="https://www.linkedin.com/in/jeffery-mahaffey-7397071a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a> */}
              </header>
              <p className="mb-0">
                <b>Chuck Bryceland</b> serves as a Managing Director at Fortistar and is a member of Fortistar's management and investment committees. He is actively involved in the firm's growth strategy and is responsible for originating and stewarding investments focused on sustainability and decarbonization. Chuck has over thirty years of financial services experience and has held several senior leadership roles in both large and small investment firms including, but not limited to JPMorgan, Bank of America, and Bessemer Trust.
              </p>
            </div>
          </div>
        </div>
        {/* end of model item 5 */}        
        {/* model item 6 */}
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.newsha.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">
                  Newsha K. Ajami </p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member                </p>
                {/* <a
                  href="https://www.linkedin.com/in/jeffery-mahaffey-7397071a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a> */}
              </header>
              <p className="mb-0">
                <b>Newsha K. Ajami </b>is the Chief Research Strategy and Development Officer for the Earth and Environmental Sciences Area (EESA) at the Lawrence Berkeley National Lab. A leading expert in sustainable water resource management, smart cities, and the water-energy-food nexus, she uses data science principles to study the human and policy dimensions of urban water and hydrologic systems. In her role at LBL, she is focused on developing interdisciplinary and impact-focused research initiatives across various domains within EESA.
              </p>
            </div>
          </div>
        </div>
        {/* end of model item 6 */}        
        {/* model item 7 */}
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.graham.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">
                  Graham Beesley</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member                </p>
                {/* <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Managing Director of Fortistar
                </p> */}
                {/* <a
                  href="https://www.linkedin.com/in/jeffery-mahaffey-7397071a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a> */}
              </header>
              <p className="mb-0">
                <b>Graham Beesley</b> has over thirty-five years experience in the Chemical Industry, having held commercial and technical leadership roles at both Procter and Gamble and INEOS. He is a board advisor to several companies and charitable foundations, most notably My Carbon Zero, focused on  CO2 reduction. Graham is a joint UK and Swiss citizen, and  holds a BA in Chemical Engineering from the University of Cambridge. 
              </p>
            </div>
          </div>
        </div>
        {/* end of model item 7 */}

      </ModalTeamMembers>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/About.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/About.jpg" }
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
    teamMember: file(
      relativePath: { eq: "about/2.0 team member placeholder.jpg" }
    ) {
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
    }    nadeem: file(relativePath: { eq: "about/nadeem_nisar_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }    chuck: file(relativePath: { eq: "about/chuck_bryceland_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }    newsha: file(relativePath: { eq: "about/newsha_k_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }    graham: file(relativePath: { eq: "about/graham_beesley_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
