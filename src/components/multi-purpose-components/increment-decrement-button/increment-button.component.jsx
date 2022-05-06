import React from "react";

import { IncButton } from "./increment-decrement-button.styles";
import { ReactComponent as IncrementSvg } from "../../../assets/VerticalVector.svg";
import { ReactComponent as DecrementSvg } from "../../../assets/HorizontalVector.svg";

class IncrementButton extends React.Component {
  render() {
    const { placement, customClickEvent } = this.props;

    return (
      <IncButton className={placement} onClick={() => customClickEvent()}>
        <div className="plus">
          <IncrementSvg className={"Inc " + placement} />
          <DecrementSvg className={"Dec " + placement} />
        </div>
      </IncButton>
    );
  }
}

export default IncrementButton;
