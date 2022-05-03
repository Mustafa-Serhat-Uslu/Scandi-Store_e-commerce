import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  NavigationContainer,
  LogoContainer,
  ActionsContainer,
} from "./header.styles";

import { selectCartHidden, selectCartTotal, selectCartItemsCount } from "../../redux/cart/cart.selectors";
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

const selectCartItems = [1, 2, 3, 4, 5, 6, 7];

class Header extends React.Component {
  render() {
    const { miniCartHidden, switcherHidden, selectCartTotal, selectCartItemsCount, siteCurrency } = this.props;

    const totalPrice = selectCartTotal.map(it => it.prices.filter(
      (price) => price.currency.label === siteCurrency.label)[0]["amount"] * it.quantity).reduce((partialSum, a) => partialSum + a, 0);

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
        {miniCartHidden ? null : <MiniCart selectCartItems={selectCartItems} />}
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
  selectCartTotal: selectCartTotal,
  switcherHidden: selectSwitcherHidden,
  selectCartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(Header);
