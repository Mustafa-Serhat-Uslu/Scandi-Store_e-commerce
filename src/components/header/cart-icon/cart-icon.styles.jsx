import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  position: static;
  width: 50px;
  height: 20px;
  right: 0px;
  top: calc(50% - 20px / 2);

  display: flex;
  justify-content: center;
  order: 3;
  flex-grow: 0;
  margin: 0px 10px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const BlackCircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30px;
  bottom: 9px;
`;

export const CartCount = styled.span`
  position: absolute;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
  top: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
