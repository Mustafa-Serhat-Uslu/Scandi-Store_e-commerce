import React from "react";
import { withRouter } from "react-router-dom";

import {
  HeaderButtonContainer,
  ButtonLabel,
  ButtonBorder,
  ButtonOuterLabel,
} from "./header-button.styles";

class HeaderButton extends React.Component {
  render() {
    const { category } = this.props;
    let { lastUrlToken } = this.props;

    if (lastUrlToken === "") {
      lastUrlToken = "all";
    } else if (lastUrlToken === "cart") {
      // To disable NavBar highlighting on CartPage
      lastUrlToken = "";
    }

    return (
      <HeaderButtonContainer
        to={"/category/" + category}
        className={lastUrlToken === category ? "selected" : undefined}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ButtonOuterLabel>
          <ButtonLabel>
            <span>
              {category}
              <ButtonBorder className="border" />
            </span>
          </ButtonLabel>
        </ButtonOuterLabel>
      </HeaderButtonContainer>
    );
  }
}

export default withRouter(HeaderButton);
