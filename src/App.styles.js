import styled from "styled-components";

export const AppStyles = styled.div`
  position: static;
  font-family: "Raleway";
`;

export const HeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  z-index: 100;
`;

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vw;
  transition: all 0.1s ease-in-out;

  &.miniCartHidden {
    background: rgba(0, 0, 0, 0.05);
    opacity: 0.45;
    pointer-events: none;
  }
`;
