import React from "react";
// import styled from "@emotion/styled";
// import tw from "twin.macro";
import triangleBlue from "../../images/global/link-blue-arrrow.svg";
import triangleWhite from "../../images/global/link-arrow-white.svg";

const Button = ({
  className,
  href,
  target,
  rel,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <a
    className={`group relative font-heading font-semibold inline-flex items-center justify-center text-center no-underline focus:outline-none flex items-center transition-colors duration-300 ease-in-out ${
      darkmode ? `text-white` : `text-primary-400`
    } ${className}`}
    href={href}
    target={target}
    rel={rel}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    {text}

    <img
      src={darkmode ? triangleWhite : triangleBlue}
      alt="Brand triangle"
      className="transform translate-x-2 group-hover:translate-x-4 transition-all duration-500 ease-in-out"
    />

    <span
      className={`absolute bottom-0 left-auto group-hover:left-0 right-0 group-hover:right-auto h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-in-out ${
        darkmode ? `bg-white` : `bg-primary-400`
      }`}
    ></span>
    <span></span>
  </a>
);

export default Button;
