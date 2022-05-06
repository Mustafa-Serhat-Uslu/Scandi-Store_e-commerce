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
  transition: all 0.3s ease-in-out;

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
    width: 22px;
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
    width: 16px;
    height: 16px;
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
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ buttonColor }) => buttonColor};

  &.selected {
    border: 1px solid lightgray;
  }
`;

export const SelectionNameSpan = styled.span`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  &.onMiniCart {
    font-size: 4px;
  }
`;
