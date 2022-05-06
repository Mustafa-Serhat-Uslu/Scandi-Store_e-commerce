import React from "react";

import {
  CarouselContainer,
  CornerContainer,
  ImageContainer,
  SlideButton,
} from "./carousel.styles";

import { ReactComponent as LogoBrandIcon } from "../../../assets/BrandIcon.svg";
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg";

const RIGHT = "-1";
const LEFT = "+1";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageIdx: 0 };
  }

  Slide(direction) {
    const {imageIdx} = this.state;
    const { images } = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = imageIdx + Number(change);

    let newIdx;
    if (adjustedIdx >= images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = images.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  render() {
    const { images, hasMultipleImages } = this.props;
    const { imageIdx = 0 } = this.state;

    return (
      <CarouselContainer>
        <ImageContainer Img={images[imageIdx]}>
          <CornerContainer hasMultipleImages={hasMultipleImages}>
            <SlideButton
              onClick={() => this.Slide(RIGHT)}
              className="float-left"
            >
              <Arrow />
            </SlideButton>

            <SlideButton
              onClick={() => this.Slide(LEFT)}
              className="float-right"
            >
              <Arrow className="rightFacing" />
            </SlideButton>
          </CornerContainer>

          <LogoBrandIcon className="imageBackground" />
        </ImageContainer>
      </CarouselContainer>
    );
  }
}

export default Carousel;
