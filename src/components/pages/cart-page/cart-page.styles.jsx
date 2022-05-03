import styled from "styled-components";

export const CartLabel = styled.div`
  position: absolute;
  font-family: "Raleway";
  top: 18%;
  left: 8%;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
`;

export const CartItemsContainer = styled.div`
  position: absolute;
  width: 74%;
  top: 34%;
  left: 8%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ItemBorder = styled.div`
  position: relative;
  width: 104%;
  height: 1px;
  bottom: 10px;
  border: 1px;
  background: #e5e5e5;
`;

export const CartBottomInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BottomInfoSpan = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #1d1f22;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;
