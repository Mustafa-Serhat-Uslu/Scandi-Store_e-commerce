import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { AppStyles, HeaderContainer, PageContainer } from "./App.styles";
import { selectCartHidden } from "./redux/cart/cart.selectors";

import Header from "./components/header/header.component";
import CategoryPage from "./components/pages/category-page/category-page.component";
import DetailsPage from "./components/pages/details-page/details-page.component";
import CartPage from "./components/pages/cart-page/cart-page.component";

class App extends React.Component {
  render() {
    return (
      <AppStyles>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <PageContainer
          className={!this.props.miniCartHidden ? "miniCartHidden" : undefined}
        >
          <Switch>
            <Route path="/category" component={CategoryPage} />
            <Route path="/details" component={DetailsPage} />
            <Route path="/cart" component={CartPage} />
            <Route exact path="/" component={CategoryPage} />
          </Switch>
        </PageContainer>
      </AppStyles>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  miniCartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(App);
