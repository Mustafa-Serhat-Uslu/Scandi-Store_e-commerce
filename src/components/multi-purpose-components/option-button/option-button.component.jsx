import React from "react";

import {
  ColorOptionButton,
  ColorOptionButtonContainer,
  OptionButtonContainer,
  SelectionNameSpan,
} from "./option-button.styles";

class OptionButton extends React.Component {
  render() {
    const {
      onMiniCart,
      option,
      isSelected,
      stockStatus,
      runClick,
      isColor,
      colorCode,
      value,
    } = this.props;

    let classNames = "";
    isSelected === option && (classNames += "selected");
    onMiniCart && (classNames += " onMiniCart");
    stockStatus && (classNames += " inStock");

    let miniCartOption = value;
    if (onMiniCart) { // if contains numbers, only keep number
      const hasNumber = /\d/;

      if (hasNumber.test(option)) {
        miniCartOption = value.replace(/\D/g, "");
      }
    }

    let button;
    if (!isColor) { // ##### NORMAL ATTRIBUTE BUTTON #####
      button = (
        <OptionButtonContainer
          className={classNames}
          onClick={!onMiniCart ? runClick : undefined}
        >
          <SelectionNameSpan className={classNames}>
            {onMiniCart ? miniCartOption : option}
          </SelectionNameSpan>
        </OptionButtonContainer>
      );
    } else { // ##### COLOR ATTRIBUTE BUTTON #####
      button = (
        <ColorOptionButtonContainer
          className={classNames}
          onClick={!onMiniCart ? runClick : undefined}
        >
          <ColorOptionButton className={classNames} buttonColor={colorCode} />
        </ColorOptionButtonContainer>
      );
    }

    return <>{button}</>;
  }
}

export default OptionButton;
