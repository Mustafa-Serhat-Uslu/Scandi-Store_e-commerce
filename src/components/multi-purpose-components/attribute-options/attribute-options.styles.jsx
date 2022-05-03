import styled from "styled-components";

export const AttributeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  text-transform: uppercase;

  &.onMiniCart{
    row-gap: 0px;
  }

`;

export const AttributeLabelSpan = styled.span`
  position: relative;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #1d1f22;

  &.onMiniCart {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 1px 0px;
  }
`;
