import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ModalContact from "../Modal/ModalContact";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  // const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  // const citiesClickHandler = () => {
  //    setCityDropdownOpen(!cityDropdownOpen);
  // };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/logo-footer.svg" }) {
        publicURL
      }
      nestLogo: file(relativePath: { eq: "global/Nest Logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <>
      <footer className="bg-gray-900 pt-14 md:pt-14 pb-6">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-14 md:space-y-0 mb-6 md:mb-16">
            <div className="md:col-start-1 md:col-span-4">
              <AniLink fade to="/">
                <img
                  src={data.logo.publicURL}
                  alt="Breakthrough Technologies Logo"
                  width="258"
                  className="mb-8 md:mb-0 mx-auto md:mx-0"
                />
              </AniLink>
            </div>
            <div className="max-[140px] md:max-w-full mx-auto md:mx-0">
              <div>
                <div className="bg-white bg-opacity-30 w-full h-2 mb-4"></div>
                <p className="text-white font-heading text-5xl font-bold mb-3">
                  Contact
                </p>
                <p className="text-white mb-0">
                  <a href="mailto:info@bt-tech.com">info@bt-tech.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between items-center">
            <div className="md:flex md:items-center order-2 md:order-1">
              <ul className="flex items-center flex-row flex-wrap space-x-2 md:space-x-6 justify-center md:justify-start">
                <li className="text-sm text-white">
                  © {getYear()} Breakthrough Technologies
                </li>
                {/* <li className="text-sm">
                  <a href="/terms-conditions/" className="text-white">
                    Terms & Conditions
                  </a>
                </li> */}
                <li className="text-sm">
                  <AniLink fade to="/privacy-policy/" className="text-white">
                    Privacy Policy
                  </AniLink>
                </li>
                <li className="text-sm text-white">
                  <div className="flex items-center justify-center">
                    Powered by
                    <a
                      className="group text-white flex items-center ml-1"
                      href="https://www.wisedigitalpartners.com/affordable-web-design/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img src={data.nestLogo.publicURL} alt="nest Logo" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-items-start space-x-3 order-1 md:order-2 mb-36 md:mb-0">
              <a
                href="https://www.facebook.com/BrkTec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white md:opacity-60 hover:opacity-100"
              >
                <i className="fab fa-facebook-f text-sm text-gray-900"></i>
              </a>
              <a
                href="https://twitter.com/BrkTec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white md:opacity-60 hover:opacity-100"
              >
                <i className="fab fa-twitter text-sm text-gray-900"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/brktec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white md:opacity-60 hover:opacity-100"
              >
                <i className="fab fa-linkedin-in text-sm text-gray-900"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
