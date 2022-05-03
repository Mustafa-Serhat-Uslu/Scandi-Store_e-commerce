import styled from "styled-components";

export const PopupWindow = styled.div`
  position: absolute;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 200px;
  border: 2px solid black;
  border-radius: 30px;
  background: white;
  z-index: 100;
`;

export const PopupContentsContainer = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;