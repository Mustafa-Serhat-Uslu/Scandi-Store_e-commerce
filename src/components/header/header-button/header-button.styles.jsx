import styled from "styled-components";
import { Link } from "react-router-dom";

const hoverColor = `#5ece7b`;
const defaultColor = `#1D1F22`;

export const HeaderButtonContainer = styled(Link)`
  position: relative;
  width: 100%;
  top: 12px;
  height: 25px;
  color: ${defaultColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 25px;
  border: none;
  cursor: pointer;
  right: 25px;
  text-decoration: none;
  transition: all 250ms ease-in-out;

  :hover {
    letter-spacing: 2px;
  }

  &.selected {
    letter-spacing: 2px;
    color: ${hoverColor};
    .border {
      background: ${hoverColor};
      transition: all 400ms ease-in-out;
    }
  }
`;

export const ButtonOuterLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
  width: 82px;
  order: 1;

  @media only screen and (max-width: 950px) {
    width: 60px;
  }
`;

export const ButtonLabel = styled.div`
  position: static;
  height: 20px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const ButtonBorder = styled.div`
  position: static;
  width: 100%;
  height: 2px;
  flex: none;
  order: 1;
  margin: 25px 0px;
`;
