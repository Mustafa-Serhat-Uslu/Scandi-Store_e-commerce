import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  NavigationContainer,
  LogoContainer,
  ActionsContainer,
} from "./header.styles";

import {
  selectCartHidden,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { selectSwitcherHidden } from "../../redux/switcher/switcher.selectors";
import { selectCurrency } from "../../redux/switcher/switcher.selectors";

import Logo from "./a-logo/a-logo.component";
import MiniCart from "./mini-cart/mini-cart.component";
import CurrencySwitcher from "./currency-switcher-dropdown/currency-switcher.component";
import SwitcherIcon from "./switcher-icon/switcher-icon.component";
import CartIcon from "./cart-icon/cart-icon.component";
import NavigationQuery from "./navigation/navigation-query.component";

import Query from "../../graphql/query.component";
import { CURRENCIES } from "../../graphql/queries";

class Header extends React.Component {
  render() {
    const { miniCartHidden, switcherHidden, selectCartItemsCount } = this.props;

    return (
      <HeaderContainer>
        <NavigationContainer>
          <NavigationQuery />
        </NavigationContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ActionsContainer>
          <SwitcherIcon />
          <CartIcon cartCount={selectCartItemsCount} />
        </ActionsContainer>
        {miniCartHidden ? null : <MiniCart />}
        {switcherHidden ? null : (
          <Query query={CURRENCIES}>
            <CurrencySwitcher />
          </Query>
        )}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
  miniCartHidden: selectCartHidden,
  switcherHidden: selectSwitcherHidden,
  selectCartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(Header);
