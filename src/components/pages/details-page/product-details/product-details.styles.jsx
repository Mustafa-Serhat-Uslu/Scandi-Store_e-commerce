import styled from "styled-components";

export const DetailsPageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  position: relative;
  top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageColumn = styled.div`
  position: static;
  width: 140px;
  height: 513px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const MainDetails = styled.div`
  position: static;
  width: 1130px;
  height: 513px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LittleImage = styled.div`
  position: static;
  width: 79px;
  height: 80px;
`;

export const BigImage = styled.div`
  position: static;
  width: 610px;
  height: 511px;
`;

export const NameBrandContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const OptionDetailsContainer = styled.div`
  position: relative;
  width: 292px;
  height: 680px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const ItemBrandSpan = styled.span`
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #1d1f22;
`;

export const ItemTypeSpan = styled.span`
  position: relative;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #1d1f22;
`;

export const PriceTextSpan = styled.span`
  position: relative;
  width: 50px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;
export const PriceTagSpan = styled.span`
  position: relative;
  width: 86px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #1d1f22;
`;

export const PriceInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.div`
  white-space: pre-wrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
  overflow: scroll;
  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5ece7b;
    border-radius: 10px;
  }
`;

export const AttributesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
`;
