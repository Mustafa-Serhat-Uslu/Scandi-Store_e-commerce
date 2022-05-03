import styled from "styled-components";
import { SizeButtonsContainer } from "../options/options.component";

export const CartItemContainer = styled.div`
  position: relative;

  &.onMiniCart {
    width: 94%;
    height: 190px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
    margin: 18px 22px;
    right: 10px;
  }

  &.onCartPage {
    width: 100%;
    height: 295px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
  }
`;

export const LeftPaneContainer = styled.div`
  position: relative;
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;


  &.onMiniCart{
    row-gap: 0px;
    justify-content: space-between;

  }

  &.onCartPage{
    row-gap: 14px;
    justify-content: flex-start;
    align-content: space-between;
  }

`;

export const RightPaneContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 35%;
  height: 100%;
`;

export const ItemBrandSpan = styled.span`
  font-family: "Raleway";
  font-style: normal;
  /* font-weight: ${({ onMini }) => (onMini ? "300" : "600")}; */
  /* font-size: ${({ onMini }) => (onMini ? "16px" : "30px")}; */
  line-height: 27px;
  color: #1d1f22;

  &.onMiniCart {
    font-weight: 300;
    font-size: 16px;
  }

  &.onCartPage {
    font-weight: 600;
    font-size: 30px;
  }
`;

export const ItemTypeSpan = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  /* font-size: ${({ onMini }) => (onMini ? "16px" : "30px")}; */
  line-height: 27px;
  color: #1d1f22;

  &.onMiniCart {
    font-size: 16px;
  }

  &.onCartPage {
    font-size: 30px;
  }
`;

export const ItemPriceSpan = styled.span`
  height: 42px;
  font-family: "Raleway";
  font-style: normal;
  /* font-weight: ${({ onMini }) => (onMini ? "600" : "700")};
  font-size: ${({ onMini }) => (onMini ? "16px" : "30px")}; */
  line-height: 18px;
  color: #1d1f22;

  &.onMiniCart {
    font-weight: 600;
    font-size: 16px;
  }

  &.onCartPage {
    font-weight: 700;
    font-size: 30px;
  }
`;

export const AmountPaneContainer = styled.div`
  position: relative;
  width: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  
  &.onMiniCart {
    right: 4px;
    height: 99%;
  }

  &.onCartPage {
    right: 15px;
    height: 100%;
  }

`;

export const CartItemVisualContainer = styled.div`
  position: relative;
  width: 141px;
  height: 100%;

  .miniCartImage {
    position: relative;
    width: 108px;
    height: 100%;

    background: url(image.png);
  }
`;

export const QuantitySpan = styled.div`
  display: flex;
  justify-content: center;
  
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;

  &.onMiniCart {
    font-size: 16px;
  }

`;

export const AttributesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  pointer-events: none;

  &.onMiniCart{
    
  }

`;
