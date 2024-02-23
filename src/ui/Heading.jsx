import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      fontsize: 3rem;
      fontweight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      fontsize: 2rem;
      fontweight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      fontsize: 2rem;
      fontweight: 400;
    `}
`;

export default Heading;
