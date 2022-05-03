import React from "react";
import { withRouter } from "react-router-dom";

import {
  HeaderButtonContainer,
  ButtonLabel,
  ButtonBorder,
  ButtonOuterLabel
} from "./header-button.styles";

class HeaderButton extends React.Component {
  render() {
    let {
      category,
      // isSelected,
      runClick,
      history,
      match,
      lastUrlToken
    } = this.props;

    if (lastUrlToken === ""){
      lastUrlToken = "all";
    }
    else if (lastUrlToken === "cart") { // To disable NavBar highlighting on CartPage
      lastUrlToken = "";
    }

    return (
      <HeaderButtonContainer
        to={"/category/" + category}
        className={lastUrlToken === category ? "selected" : undefined}
        onClick={() => {
          // runClick();
          // history.push(`${match.url}${category}`);
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
