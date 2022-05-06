import styled from "styled-components";

export const SizeButtonsContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

  &.onCartPage {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 5px;
  }

  &.onMiniCart {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 8px;
    left: 2px;
  }

  &.onDetailsPage {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 8px;
  }
`;
