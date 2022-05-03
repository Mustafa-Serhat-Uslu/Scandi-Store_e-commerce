import React from "react";

import { DecButton } from "./increment-decrement-button.styles";

import { ReactComponent as DecrementSvg } from "../../../assets/HorizontalVector.svg";
import reactRouterDom from "react-router-dom";
import { render } from "react-dom";

class DecrementButton extends React.Component {
  render() {
    const { placement, customClickEvent } = this.props;

    return (
      <DecButton className={placement} onClick={() => customClickEvent()}>
        <DecrementSvg className={"Dec " + placement} />
      </DecButton>
    );
  }
}

export default DecrementButton;
