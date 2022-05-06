import React from "react";
import { withRouter } from "react-router-dom";
import { HeaderNavigation } from "./navigation.styles";

import HeaderButton from "../header-button/header-button.component";

class Navigation extends React.Component {
  render() {
    const { queryData, location } = this.props;
    const lastUrlToken = String(location.pathname).split("/").pop();

    let loadCategoriesShowNavButtons;

    if (queryData) {
      const categories = queryData.categories;

      loadCategoriesShowNavButtons = categories.map(({ name }) => (
        <HeaderButton key={name} category={name} lastUrlToken={lastUrlToken} />
      ));
    } else {
      loadCategoriesShowNavButtons = <h1>Loading...</h1>;
    }

    return <HeaderNavigation>{loadCategoriesShowNavButtons}</HeaderNavigation>;
  }
}

export default withRouter(Navigation);
