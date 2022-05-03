import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  position: relative;
  width: 386px;
  height: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.5);
  }

  &:hover #cart {
    visibility: visible;
  }

  opacity: ${({ inStock }) => (inStock ? 1.0 : 0.5)};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 356px;
  height: 338px;
  background: lightgray;

  .outOfStockLabelContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .productCardImage{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

`;

export const ContentContainer = styled.div`
  background: white;
  position: relative;
  width: 92%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Raleway";
  z-index: 1;
`;

export const ProductName = styled.span`
  position: relative;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;

export const ProductPrice = styled.span`
  position: relative;
  font-weight: 600;
  font-size: 18px;
`;

export const GreenCartContainer = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  right: 15px;
  bottom: -26px;
  z-index: 2;
  visibility: hidden;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

export const OutOfStockLabel = styled.span`
  position: relative;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 26px;
  line-height: 180%;
  display: ${({ inStock }) => (inStock ? "none" : "block")};
  color: #8d8f9a;
  top: 140px;
  z-index: 1;

  &.outOfStockAnimation {
    animation-name: anim;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: 2;
    animation-direction: alternate;
  }

  @keyframes anim {
    from {
      font-size: 26px;
      color: #8d8f9a;
    }
    to {
      font-size: 48px;
      color: red;
    }
  }
`;
