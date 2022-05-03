import styled from "styled-components";

export const LogoTransparent = styled.div`
  /* logo transparent */

  position: absolute;
  width: 41px;
  left: calc(50% - 41px / 2);
  top: 0%;
  bottom: 0%;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
