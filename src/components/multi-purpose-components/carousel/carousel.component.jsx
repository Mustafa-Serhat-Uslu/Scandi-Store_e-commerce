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
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);

    let newIdx;
    if (adjustedIdx >= this.props.images.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = this.props.images.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  render() {
    const { imageIdx = 0 } = this.state;

    return (
      <CarouselContainer>
        <ImageContainer Img={this.props.images[imageIdx]}>

          <CornerContainer hasMultipleImages={this.props.hasMultipleImages}>
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
