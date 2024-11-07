import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import styled from "@emotion/styled";
import tw from "twin.macro";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
// import ButtonGhost from "../Button/ButtonGhost";
import Accordion from "./Accordion";

const StyledMainNav = styled.nav`
  ${({ headerStyle }) => (headerStyle === "hidden" ? tw`hidden` : null)};
  ${({ headerHasBorder }) =>
    headerHasBorder
      ? tw`border-b border-solid border-gray-700 border-opacity-10`
      : null};
  @media (max-width: 1023px) {
    ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-900` : null)};
    /* ${({ headerStyle }) =>
      headerStyle === "overlap" ? tw`bg-white` : null};  */
  }
  &[data-fixed="true"] {
    ${tw`fixed top-0 left-0 w-full bg-white z-20`}
    @media (max-width: 1023px) {
      ${({ offcanvasOpen }) => (offcanvasOpen ? tw`bg-gray-900` : null)};
    }
    #navigation-desktop {
      > li {
        > a {
          ${tw`text-gray-700`}
        }
      }
    }
    .logo-initial {
      ${tw`hidden`}
    }
    .logo-fixed {
      ${tw`block`}
    }
  }
  #navigation-desktop {
    > li {
      > a {
        ${({ headerLinkColor }) =>
          headerLinkColor === "white" ? tw`text-white` : tw`text-gray-900`};
        ${tw`relative font-body text-base font-medium no-underline pb-8`}
        &:after {
          ${tw`content absolute bottom-0 right-0 left-0 mx-auto h-0.5	w-0 bg-primary-400 transform -translate-y-6 transition-all duration-300 ease-linear`}
        }
        &:hover {
          &:after {
            ${tw`w-full`}
          }
        }
      }
      &.active {
        &:after {
          ${tw`w-8`}
        }
      }
    }
    .submenu-parent {
      ${tw`relative`}
      .submenu {
        ${tw`absolute flex flex-col w-auto bg-white shadow-3xl space-y-4 pt-7 pb-10 px-7 opacity-0 invisible z-10 transform -translate-x-10 translate-y-12 transition-all duration-300 ease-linear`}
        li {
          ${tw`whitespace-nowrap`}
          a {
            ${tw`relative font-body text-base text-gray-600 font-medium tracking-wide no-underline pb-4 block`}
            &:after {
              ${tw`content absolute bottom-0 left-0 h-px w-full bg-primary-400 transition-all duration-300 ease-linear`}
            }
            &:hover {
              ${tw`text-primary-400`}
            }
          }
        }
      }
      &:hover {
        .submenu {
          ${tw`opacity-100 visible translate-y-7`}
        }
      }
    }
  }

  #navigation-mobile {
    > li {
      ${tw`flex justify-center text-center space-y-10`}
      > a,
      button {
        ${tw`font-heading text-4xl text-white hover:text-white font-bold no-underline text-left focus:outline-none transition-colors duration-300 ease-linear`}
      }
    }
    .submenu {
      ${tw`flex-col pl-6`}
      li {
        &:not(:last-child) {
          ${tw`mb-2`}
        }
        a {
          ${tw`text-white hover:text-primary-400`}
        }
      }
    }
  }
`;

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  // Hover on parent links
  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  // const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  // const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  // const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      logoDark: file(relativePath: { eq: "global/logo-dark.svg" }) {
        publicURL
      }
      logoLight: file(relativePath: { eq: "global/logo-light.svg" }) {
        publicURL
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    className = null;

  if (headerStyle === "overlap") {
    initialLogo = data.logoLight.publicURL;
    stickyLogo = data.logoDark.publicURL;
    className = "absolute";
  } else {
    initialLogo = data.logoDark.publicURL;
    stickyLogo = data.logoDark.publicURL;
  }

  if (offcanvasOpen) {
    initialLogo = data.logoLight.publicURL;
    stickyLogo = data.logoLight.publicURL;
  }

  return (
    <StyledMainNav
      id="main-navigation"
      className={`py-3 md:py-4 w-full transition duration-300 ease-linear ${className}`}
      role="navigation"
      aria-label="main-navigation"
      data-fixed={scrolled}
      headerStyle={headerStyle}
      headerHasBorder={headerHasBorder}
      headerLinkColor={headerLinkColor}
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container flex justify-between items-center">
        <div className="flex-auto flex items-center">
          <AniLink fade to="/">
            <div className="logo-initial">
              <img
                src={initialLogo}
                alt="Nouvel Technologies Logo"
                className="w-[179px] md:w-[260px]"
              />
            </div>
            <div className="logo-fixed hidden">
              <img
                src={stickyLogo}
                alt="Nouvel Technologies Logo"
                className="w-[179px] md:w-[260px]"
              />
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:items-center lg:justify-end space-x-8 lg:mr-10"
          >
            <li>
              <AniLink fade to="/about/">
                About
              </AniLink>
            </li>

            <li
              className={`submenu-parent ${subMenuHovering1 ? "active" : ""}`}
            >
              <AniLink
                fade
                to="/how-to-improve-cooling-tower-efficiency/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
              >
                Technologies
              </AniLink>
              <ul className="submenu">
                <li>
                  <AniLink fade to="/how-to-improve-cooling-tower-efficiency/">
                    ALI: Water Recovery
                  </AniLink>
                </li>
                <li>
                  <AniLink fade to="/on-the-horizon/">
                    On The Horizon
                  </AniLink>
                </li>
              </ul>
            </li>

            <li>
              <AniLink fade to="/news-resources/">
                News & Resources
              </AniLink>
            </li>
          </ul>
          <div className="hidden lg:inline-flex items-center">
            <ButtonSolid as="button" modal="modal-contact" text="Contact Us" />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <ul id="navigation-mobile" className="mb-16">
                <li className="mb-8">
                  <AniLink
                    fade
                    to="/about/"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    About
                  </AniLink>
                </li>
                <li className="mb-8">
                  <Accordion title="Technologies" className="submenu-parent">
                    <li>
                      <AniLink
                        fade
                        to="/how-to-improve-cooling-tower-efficiency/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        ALI: Water Recovery
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        fade
                        to="/on-the-horizon/"
                        onKeyDown={clickHandler}
                        onClick={clickHandler}
                      >
                        On The Horizon
                      </AniLink>
                    </li>
                  </Accordion>
                </li>
                <li className="mb-8">
                  <AniLink
                    fade
                    to="/news-resources/"
                    onKeyDown={clickHandler}
                    onClick={clickHandler}
                  >
                    News & Resources
                  </AniLink>
                </li>
              </ul>

              <ButtonSolid
                className="w-full"
                as="button"
                modal="modal-contact"
                text="Contact Us"
              />
            </OffCanvas>
          </div>
        </div>
      </div>
    </StyledMainNav>
  );
};
export default MainNav;
