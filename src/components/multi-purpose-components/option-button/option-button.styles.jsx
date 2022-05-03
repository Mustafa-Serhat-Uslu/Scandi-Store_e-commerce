import styled from "styled-components";

export const OptionButtonContainer = styled.button`
  width: 54px;
  height: 38px;
  opacity: 0.9;
  display: flex;
  position: relative;
  box-sizing: border-box;
  background: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d1f22;
  cursor: pointer;

  > span {
    font-size: "14px";
  }

  &.inStock {
    background: white;
    opacity: 1;
  }

  &.selected {
    color: white;
    background: black;
  }

  &.onMiniCart {
    width: 37px;
    height: 22px;
    right: 2px;
    > span {
      font-size: 10px;
    }    
  }
`;

export const ColorOptionButtonContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;

  &.onMiniCart {
    width: 14px;
    height: 14px;
  }

  &.selected {
    border: 1px solid #5ece7b;
  }
`;

export const ColorOptionButton = styled.button`
  position: relative;
  width: 90%;
  height: 90%;
  border: 1px dotted lightgray;
  cursor: pointer;

  background: ${({ buttonColor }) => buttonColor};

  &.selected {
    border: 1px solid lightgray;
  }
`;

export const SelectionNameSpan = styled.span`

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 300;

  &.onMiniCart {
    font-size: 2px;
  }
`;
