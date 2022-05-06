import styled from "styled-components";
import { Link } from "react-router-dom";

export const MiniCartContainer = styled.div`
  position: absolute;
  width: 325px;
  height: 550px;
  right: 100px;
  top: 78px;
  z-index: 1;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;

  > span {
    margin: 16px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const ScrollView = styled.div`
  position: relative;
  height: 360px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;

  .empty-message {
    display: flex;
    height: 285px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  /* Scroller styles */

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5ece7b;
    border-radius: 2px;
  }
`;

export const TotalLabelContainer = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 20px 17px;

  > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const MiniCartButtonsContainer = styled.div`
  position: relative;
  width: 92%;
  margin: 0px 14px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const ViewBagButton = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  position: static;
  width: 140px;
  height: 43px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border: 1px solid #1d1f22;
  box-sizing: border-box;

  :hover {
    transition: all 0.1s ease;
    transform: scale(0.95);
  }

  span {
    position: absolute;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #1d1f22;
  }
`;
