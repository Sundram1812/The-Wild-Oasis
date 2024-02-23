import { css, styled } from "styled-components";

const types = {
  horizontal: css`
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  `,
  vertical: css`
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  `,
};

const Row = styled.div`
  display: flex;
  ${(props) => types[props.direction]};
`;

Row.defaultProps = {
  direction: "vertical",
};
export default Row;
