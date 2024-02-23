import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <div className="flex justify-center">
      <img src="/logo-light.png" alt="Logo" width={'75%'} />
    </div>
  );
}

export default Logo;