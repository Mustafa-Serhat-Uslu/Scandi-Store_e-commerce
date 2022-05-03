import styled from "styled-components";

const IMG_WIDTH = "200px";
const IMG_HEIGHT = "100%";

export const CarouselContainer = styled.div`
  position: relative;
  width: ${IMG_WIDTH};
  height: ${IMG_HEIGHT};
  background: transparent;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: contain,cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ Img }) => Img});

  > .imageBackground {
    position: absolute;
    width: 75%;
    height: 75%;
    opacity: 0.3;
    top: 25px;
    right: 15px;
    z-index: -1;
  }
`;

export const SlideButton = styled.button`
  height: 24px;
  font-size: 2em;
  border: 2px solid #ffffff;
  margin: 0px 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.73);
  border: 0;
  cursor: pointer;

  &.float-right {
    float: right !important;
  }

  &.float-left {
    float: left !important;
  }

  > .rightFacing {
    transform: rotate(180deg);
  }
`;

export const CornerContainer = styled.div`
  display: ${({hasMultipleImages}) => !hasMultipleImages && "none"};
  position: absolute;
  right: 5px;
  bottom: 6px;
  width: 65px;
`;
