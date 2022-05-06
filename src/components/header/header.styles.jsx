import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: white;
`;

export const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  left: 6%;
  height: 40px;

  @media only screen and (max-width: 950px) {
    left: 2%;

    button {
      scale: 0.9;
    }
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  width: 41px;
  height: 41px;
  top: calc(50% - 41px / 2 + 4.5px);
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 204px;
  height: 40px;
  right: 101px;
  top: 23px;
`;
