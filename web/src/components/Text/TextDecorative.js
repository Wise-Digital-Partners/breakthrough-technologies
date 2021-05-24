import React from "react";
import triangleRed from "../../images/global/Red-Triangle.svg";
import triangleWhite from "../../images/global/outiline-white-traingle.svg";

const Button = ({
  className,
  darkmode,
  mobileAlignment,
  desktopAlignment,
  text,
}) => (
  <div
    className={`flex 
    ${desktopAlignment === "center" ? "md:justify-center" : "md:justify-start"} 
    ${mobileAlignment === "center" ? "justify-center" : "justify-start"}`}
  >
    <p
      className={` md:text-lg uppercase tracking-[0.3em] font-light block mb-6 md:mb-7 
    ${darkmode ? `text-white` : `text-secondary-400 `} ${className}`}
    >
      <img
        src={darkmode ? triangleWhite : triangleRed}
        alt="Brand triangle"
        className={`block mx-auto mb-2.5 ${className}`}
      />
      {text}
    </p>
  </div>
);

export default Button;
