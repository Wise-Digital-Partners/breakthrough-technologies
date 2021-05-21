import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledButton = styled.a`
  ${({ darkmode }) =>
    darkmode &&
    tw`text-white border-white hover:bg-white hover:text-primary-400`};
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
    className={`font-body uppercase text-primary-400 hover:text-white bg-transparent hover:bg-primary-400 border border-solid border-primary-900 px-8 py-2 height-[46px] min-w-[200px] rounded-3xl inline-flex items-center justify-center text-center no-underline focus:outline-none transition-colors duration-300 ease-in-out ${
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
