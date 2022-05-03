import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { HeaderNavigation } from "./navigation.styles";

import HeaderButton from "../header-button/header-button.component";

class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedCategory: "all",
  //   };
  // }

  // handleClick(e) {
  //   this.setState({ selectedCategory: e.name });
  // }


  render() {

    const lastUrlToken = String(this.props.location.pathname).split("/").pop();

    let loadCategoriesShowNavButtons;

    if (this.props.queryData) {
      const categories = this.props.queryData.categories;

      loadCategoriesShowNavButtons = categories.map(({ name }) => (
        <HeaderButton
          key={name}
          category={name}
          lastUrlToken={lastUrlToken}
          // isSelected={this.state.selectedCategory}
          // runClick={() => this.handleClick({ name })}
        />
      ));
    } else {
      loadCategoriesShowNavButtons = <h1>Loading...</h1>; // TODO
    }

    return <HeaderNavigation>{loadCategoriesShowNavButtons}</HeaderNavigation>;
  }
}

export default withRouter(Navigation);
