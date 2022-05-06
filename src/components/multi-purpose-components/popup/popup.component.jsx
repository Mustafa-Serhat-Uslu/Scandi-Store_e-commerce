import React from "react";
import FilledButton from "../filled-button/filled-button.component";

import { PopupWindow, PopupContentsContainer } from "./popup.styles";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    const {initPopup} = this.props;
    this.state = { popupActive: initPopup };
  }

  render() {
    const { popupActive } = this.state;
    const { customEvent } = this.props;

    let handleClick = () => {
      this.setState({ popupActive: false });
      customEvent();
    };

    return (
      <PopupWindow isActive={popupActive}>
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
