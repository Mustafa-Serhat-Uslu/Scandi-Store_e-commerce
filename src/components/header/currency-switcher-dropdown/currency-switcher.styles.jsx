import styled from "styled-components";

export const CurrencySwitcherContainer = styled.div`
  position: absolute;
  width: 114px;
  right: 100px;
  top: 65px;
  z-index: 1;
  padding: 12px 0px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  background: #ffffff;

  border: 1px solid hsla(0, 0%, 95%, 0.6);
  background-clip: padding-box;

  animation: growDown 200ms ease-in-out forwards;
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

export const CurrencyItemConstainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  column-gap: 6px;
  margin: 6px 0px 0px 0px;
  cursor: pointer;

  transition: all 0.01s ease-in-out;

  :hover {
    box-shadow: 0px 2px 6px 0px lightgray;
    transform: scale(1.05);
    background-color: #EEEEEE;
  }

  > span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: #1d1f22;

    &.signSpan {
      margin: 0px 0px 0px 20px;
    }
  }
`;
