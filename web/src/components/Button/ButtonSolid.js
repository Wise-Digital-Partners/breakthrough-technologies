import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
  ${({ darkmode }) => darkmode && tw`bg-primary-400`};
`;

const Button = ({
  className,
  href,
  target,
  rel,
  modal,
  onClick,
  as,
  type,
  darkmode,
  text,
}) => (
  <StyledButton
    className={`font-body font-medium text-white hover:text-white bg-primary-400 hover:bg-primary-500 px-8 py-3 min-w-[160px] inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${
      className || ""
    }`}
    href={href}
    target={target}
    rel={rel}
    data-modal-open={modal}
    onClick={onClick}
    as={as}
    type={type}
    darkmode={darkmode}
  >
    {text}
  </StyledButton>
);

export default Button;
