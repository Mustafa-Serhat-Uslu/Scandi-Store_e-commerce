import styled from "styled-components";

export const CardItemsContainer = styled.div`
  position: absolute;
  display: flex;
  top: 35%;
  width: 100%;
  display: grid;
  margin-bottom: 30px;
  justify-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  align-items: center;

  @media screen and (max-width: 725px) {
    grid-template-columns: auto;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 1150px) and (min-width: 725px) {
    grid-template-columns: auto auto;
    grid-gap: 15px;
  }
`;

export const CategoryName = styled.div`
  left: 7%;
  top: 18%;
  position: absolute;
  font-family: "Raleway";
  font-weight: 400;
  font-size: 38px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  text-transform: capitalize;
`;
