import React from "react";

import {
  ColorOptionButton,
  ColorOptionButtonContainer,
  OptionButtonContainer,
  SelectionNameSpan,
} from "./option-button.styles";

class OptionButton extends React.Component {
  render() {
    const { onMiniCart, option, isSelected, stockStatus, runClick, isColor, colorCode } = this.props;

    let classNames = "";
    isSelected === option && (classNames += "selected");
    onMiniCart && (classNames += " onMiniCart");
    stockStatus && (classNames += " inStock");

    let button;
    if (!isColor) {                   // ##### NORMAL ATTRIBUTE BUTTON #####
      button = (
        <OptionButtonContainer
          className={classNames}
          onClick={!onMiniCart ? runClick : undefined}
        >
          <SelectionNameSpan className={classNames}>{option}</SelectionNameSpan>
        </OptionButtonContainer>
      );
    } else {                           // ##### COLOR ATTRIBUTE BUTTON #####
      button = (
        <ColorOptionButtonContainer 
          className={classNames} 
          onClick={!onMiniCart ? runClick : undefined}
          >
          <ColorOptionButton className={classNames} buttonColor={colorCode} />
        </ColorOptionButtonContainer>
      );
    }

    return(<>{button}</>);
  }
}

export default OptionButton;
