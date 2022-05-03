import React from "react";

import {
  BigImage,
  ImageColumn,
  LittleImage,
  ProductGalleryContainer,
} from "./product-gallery.styles";

// Initially 0th index is big image rest is on column, onClick replace the image on smallimage
class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: JSON.parse(JSON.stringify(this.props.imgs)) };
  }

  render() {
    const Images = this.state.images;

    var littleImages = [];
    for (let i = 1; i < Images.length; i++) {
      littleImages.push(
        <LittleImage
          key={Images[i]}
          src={Images[i]}
          onClick={() => this.setState({ images: array_switch(Images, i, 0) })}
        />
      );
    }

    return (
      <ProductGalleryContainer>
        <ImageColumn>{littleImages}</ImageColumn>
        <BigImage src={Images[0]} />
      </ProductGalleryContainer>
    );
  }
}

export default ProductGallery;

function array_switch(arr, old_index, new_index) {
  const temp = arr[new_index];
  arr[new_index] = arr[old_index];
  arr[old_index] = temp;
  return arr;
}
