import styled from "styled-components";

export const SwitcherIconContainer = styled.div`
  position: static;
  width: 26px;
  height: 29px;
  left: 124px;
  top: 5.5px;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 22px;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  transition: all 0.15s ease-in-out;

  > span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #1d1f22;
  }

  :hover {
    transform: scale(1.2);
  }
`;

export const DownArrowContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 10px;
`;
