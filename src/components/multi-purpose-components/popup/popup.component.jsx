import React from "react";
import FilledButton from "../filled-button/filled-button.component";

import { PopupWindow, PopupContentsContainer } from "./popup.styles";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popupActive: this.props.initPopup };
  }

  render() {
    let handleClick = () => {
      this.setState({ popupActive: false });
      this.props.customEvent();
    };

    console.log(this.state.popupActive);

    return (
      <PopupWindow isActive={this.state.popupActive}>
        <PopupContentsContainer>
          <span>
            Please select all attributes for the item before adding to cart :)
          </span>
          <FilledButton
            placement="onPopup"
            buttonText={"Ok"}
            customClickEvent={handleClick}
          />
        </PopupContentsContainer>
      </PopupWindow>
    );
  }
}

export default Popup;
