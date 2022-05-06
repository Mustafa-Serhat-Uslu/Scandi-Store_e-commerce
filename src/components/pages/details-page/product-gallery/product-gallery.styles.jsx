import styled from "styled-components";

export const ProductGalleryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const LittleImage = styled.img`
  position: static;
  width: 79px;
  height: 80px;
  cursor: pointer;
`;

export const ImageColumn = styled.div`
  position: static;
  width: 140px;
  height: 513px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const BigImage = styled.img`
  position: static;
  width: 610px;
  height: 511px;
  object-fit: scale-down;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  
`;

