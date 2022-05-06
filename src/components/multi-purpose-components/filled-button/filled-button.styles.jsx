import styled from "styled-components";

export const FilledButtonContainer = styled.button`
  position: relative;
  border: 0px;
  cursor: pointer;
  transition: all 0.12s ease-in-out;
  background: ${({ inStock }) => (inStock ? "#5ece7b" : "#474747")};

  /* added */
  height: 43px;
  width: 279px;

  :hover {
    transform: scale(0.95);
  }

  :hover {
    opacity: 0.9;
  }

  :active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);

    background: ${({ inStock }) => !inStock && "red"};
  }

  &.onPopup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 32px;
  }

  &.onDetailsPage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 56px;
    bottom: 5px;
  }

  &.onMiniCart {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 43px;
    background: #5ece7b;
  }
`;

export const FilledButtonText = styled.div`
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  justify-content: center;

  font-size: 14px;
  line-height: 120%;

  &.onDetailsPage {
    font-size: 16px;
  }

  &.onMiniCart {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
  }
`;
