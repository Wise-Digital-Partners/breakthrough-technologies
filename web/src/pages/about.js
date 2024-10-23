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
import triangleRed from "../images/global/Red-Triangle.svg";

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
        title="About Nouvel Technologies | Industrial Tech Company"
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
                <h1>About Nouvel Technologies</h1>
                <p className="mb-0">
                  Nouvel Technologies is an engineering-driven organization that
                  utilizes fundamental physics to solve sustainability problems.
                  We develop innovative products that provide significant cost
                  savings to businesses. With each breakthrough solution, we
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
                  image={data.benoit.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Benoit Ansart</div>
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
                  image={data.jeff.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Jeffery J. Mahaffey</div>
                <div className="text-xl">Chief Operating Officer</div>
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
                  image={data.art.childImageSharp.gatsbyImageData}
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </button>
              <div className="text-center">
                <div className="heading-three mb-2">Art Garcia</div>
                <div className="text-xl">Vice President of Supply Chain</div>
              </div>
            </div>
          </div>
          {/* <div className="mt-24 mb-2 md:mb-3">
            <TextDecorative
              text="Board of Directors"
              desktopAlignment="center"
              mobileAlignment="center"
            />
          </div>
          <div className="grid md:grid-cols-4 md:gap-x-2 gap-y-10 md:items-center">
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
          </div> */}
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
              Build innovative industrial products that improve water and energy
              sustainability and drive better business performance.
            </h2>
          </header>
        </div>
      </BgImage>

      <section className="bg-white relative mb-20 md:mb-52">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-x-4 gap-y-2 lg:items-center">
            <div className="lg:text-left">
              <img
                src={triangleRed}
                alt="Brand triangle"
                className={`block mx-auto mb-2.5 `}
              />
              <div className="text-secondary-400 uppercase font-heading text-lg leading-[28px] tracking-[5.4px] font-light mt-[14px]">
                The Team
              </div>
              <h2>Who We Are</h2>
              <p className="mb-0">
                Long before we were acquired by Nouvel Technologies, our core
                team had already proven they could produce clean, cost-efficient
                energy without compromising efficiency.
              </p>
              <p className="mb-4">But ambition demanded growth.</p>
              <p className="mb-4">
                Now, backed by sustainability-focused investor Foristar, we're
                poised to achieve even greater impact while remaining true to
                our founding mission:
              </p>
              <p className="mb-4">
                To transform physics and emerging technology into cleaner, more
                efficient industrial solutions.
              </p>
            </div>
            <div className="lg:h-[560px]">
              <div className=" lg:left-0 lg:w-50vw lg:h-full">
                <BgImage
                  className="hidden lg:block lg:h-full"
                  image={data.aboutDesktop.childImageSharp.gatsbyImageData}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "100% 0%",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <GatsbyImage
                  image={data.aboutMobile.childImageSharp.gatsbyImageData}
                  className="lg:hidden -mx-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <RecentBlogPosts className="mb-20 md:mb-40" /> */}
      <CallToAction headingLevel="h2" />

      <ModalTeamMembers slideIndex={slideIndex}>
        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.benoit.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Benoit Ansart</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Chief Executive Officer
                </p>
                <a
                  href="https://www.linkedin.com/in/benoit-ansart-275461/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Benoit Ansart</b> is <b>CEO of Nouvel Technologies</b> and
                leads the strategic orientation of the company in developing new
                sustainable technologies and related products to markets. Benoit
                is also the Chief Technology Officer of Fortistar, Nouvel’s
                parent company, where he leads the technical aspects of
                Fortistar’s investments in companies that address complex
                sustainability and decarbonization challenges. Benoit has been
                with Fortistar for over twenty years and in the energy and
                sustainability businesses in North America and Europe for over
                forty years. Benoit holds a MS in Electrical Engineering from
                CentraleSupelec, France and an Advanced Management Program
                certificate from the Wharton Business School.
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
                  href="https://www.linkedin.com/in/jeffery-mahaffey-676b394/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Jeff Mahaffey</b> is the{" "}
                <b>COO and leader of Nouvel Technologies</b>
                commercial execution plan. He previously formed and led a joint
                venture with HB International (HBI) of Paris, an international
                brokerage company that negotiates deals on behalf of businesses
                in the oleochemical industry.
              </p>
              <p className="mb-0">
                Before serving as managing director at HBI USA, Jeff served as
                COO of Global Bio Chem Technology Group of China, where he
                developed and commercialized bio-based glycols. Jeff’s early
                career includes 25 years of executive management experience at
                Henkel and Proctor & Gamble. He is a graduate of Emory
                University with degrees in Economics, Chemistry & Physics, and
                German.{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid md:grid-cols-12 md:gap-x-8 lg:gap-x-12 gap-y-4">
            <div className="md:col-start-1 md:col-span-4">
              <div className="sticky top-0">
                <GatsbyImage
                  image={data.art.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Art Garcia</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Vice President of Supply Chain
                </p>
                <a
                  href="https://www.linkedin.com/in/arturo-garcia-614a1831/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Art Garcia</b> is the <b>Vice President of Supply Chain</b>{" "}
                with over 15 years of experience. He has managed supply chain
                operations and EPC projects across the U.S., UK, Mozambique, and
                Brazil, working in industries such as oil and gas, power
                generation, LNG, and construction. Art has a proven track record
                in optimizing logistics and managing large-scale operations. He
                holds a degree in Supply Chain and Global Logistics from the
                University of Houston.
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
                  Board Member{" "}
                </p>

                <a
                  href="https://www.linkedin.com/in/nadeem-nisar-84b3b69"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Nadeem Nisar</b> has been serving as a Managing Director
                of Fortistar since July 2008, where he serves as head of their
                investment team. He is a member of Fortistar’s management and
                investment committees which oversee the operations
                of Fortistar’s portfolio companies. He also serves on the board
                of several of Fortistar’s portfolio companies,
                including Fortistar Sustainable Solutions
                Corp, Carbonfree Chemicals LLC, Braven Environmental
                and Pellucere Technologies.
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
                  image={data.chuck.childImageSharp.gatsbyImageData}
                  className="md:h-[536px]"
                />
              </div>
            </div>
            <div className="md:col-end-13 md:col-span-8">
              <header className="mb-6 md:mb-10">
                <p className="heading-two mb-3">Chuck Bryceland</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member{" "}
                </p>
                <a
                  href="https://www.linkedin.com/in/chuck-bryceland-39a90a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Chuck Bryceland</b> serves as a Managing Director
                at Fortistar and is a member of Fortistar's management and
                investment committees. He is actively involved in the firm's
                growth strategy and is responsible for originating and
                stewarding investments focused on sustainability and
                decarbonization. Chuck has over thirty years of financial
                services experience and has held several senior leadership roles
                in both large and small investment firms including, but not
                limited to JPMorgan, Bank of America, and Bessemer Trust.
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
                <p className="heading-two mb-3">Newsha K. Ajami </p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member{" "}
                </p>
                <a
                  href="https://www.linkedin.com/in/newsha-ajami-phd-a509363"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Newsha K. Ajami </b>is the Chief Research Strategy and
                Development Officer for the Earth and Environmental Sciences
                Area (EESA) at the Lawrence Berkeley National Lab. A leading
                expert in sustainable water resource management, smart cities,
                and the water-energy-food nexus, she uses data science
                principles to study the human and policy dimensions of urban
                water and hydrologic systems. In her role at LBL, she is focused
                on developing interdisciplinary and impact-focused research
                initiatives across various domains within EESA.
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
                <p className="heading-two mb-3">Graham Beesley</p>
                <p className="text-lg uppercase tracking-[0.3em] text-gray–900 mb-3">
                  Board Member{" "}
                </p>
                <a
                  href="https://www.linkedin.com/in/graham-beesley-427209"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in text-primary-400 text-xl"></i>
                </a>
              </header>
              <p className="mb-0">
                <b>Graham Beesley</b> is the CEO of BiOWiSH Technologies, a
                company that creates microbial solutions to restore quality in
                the world’s polluted waters, safely increase crop production,
                and help feed the world’s growing population. Graham has over
                thirty-five years experience in the Chemical Industry, having
                held commercial and technical leadership roles at both Procter
                and Gamble and INEOS.He is a board advisor to several companies
                and charitable foundations, most notably My Carbon Zero, focused
                on  CO2 reduction. Graham is a joint UK and Swiss citizen, and
                 holds a BA in Chemical Engineering from the University of
                Cambridge. 
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
    aboutDesktop: file(relativePath: { eq: "about/about-desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    aboutMobile: file(relativePath: { eq: "about/about-mobile.jpg" }) {
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
    }
    art: file(relativePath: { eq: "about/art.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    benoit: file(relativePath: { eq: "about/benoit.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    nadeem: file(relativePath: { eq: "about/nadeem_nisar_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    chuck: file(relativePath: { eq: "about/chuck_bryceland_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    newsha: file(relativePath: { eq: "about/newsha_k_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    graham: file(relativePath: { eq: "about/graham_beesley_thmb.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
  }
`;
export default Page;
