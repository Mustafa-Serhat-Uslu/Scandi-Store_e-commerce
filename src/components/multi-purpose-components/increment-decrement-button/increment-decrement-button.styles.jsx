import styled from "styled-components";

export const IncButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  background: white;
  cursor: pointer;

  &.onMiniCart {
    width: 22px;
    height: 22px;
  }

  &.onCartPage {
    width: 45px;
    height: 45px;
  }

  > .plus {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;

    > .Inc {
      position: absolute;

      &.onMiniCart {
        top: 2px;
      }

      &.onCartPage {
        top: 12px;
      }
    }

    > .Dec {
      position: absolute;

      &.onMiniCart {
        top: 10px;
      }

      &.onCartPage {
        top: 20px;
      }
    }

    :hover {
      transition: all 0.3s ease-in-out;
      background-color: #eeeeee;
    }
  }
`;

export const DecButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  background: white;
  cursor: pointer;

  &.onMiniCart {
    width: 22px;
    height: 22px;
  }

  &.onCartPage {
    width: 45px;
    height: 45px;
  }

  :hover {
    transition: all 0.3s ease-in-out;
    background-color: #eeeeee;
  }
`;
