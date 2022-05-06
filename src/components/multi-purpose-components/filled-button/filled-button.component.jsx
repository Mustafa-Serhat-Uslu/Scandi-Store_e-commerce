import React from "react";

import {
  FilledButtonContainer,
  FilledButtonText,
} from "./filled-button.styles";

class FilledButton extends React.Component {
  render() {
    const { placement, customClickEvent, buttonText, inStock } = this.props;

    return (
      <FilledButtonContainer
        className={placement}
        buttonType={"Large"}
        inStock={inStock}
        onClick={customClickEvent}
      >
        <FilledButtonText className={placement} buttonType={"Large"}>
          {buttonText}
        </FilledButtonText>
      </FilledButtonContainer>
    );
  }
}

export default FilledButton;
