import React from "react";
import { connect } from "react-redux";

import {
  BlackCircleContainer,
  CartCount,
  EmptyCartContainer
} from "./cart-icon.styles";

import { ReactComponent as CartSvg } from "../../../assets/EmptyCart.svg";
import { ReactComponent as BlackCircleSvg } from "../../../assets/MiniCartBlackCircle.svg";

import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { createStructuredSelector, StructuredSelectorCreator } from "reselect";

class CartIcon extends React.Component {
  render() {
    let cartCountCircle;

    if (this.props.cartCount) {
      cartCountCircle = (
        <BlackCircleContainer>
          <BlackCircleSvg />
          <CartCount>{this.props.cartCount}</CartCount>
        </BlackCircleContainer>
      );
    } else {
      cartCountCircle = null;
    }

    return (
      <EmptyCartContainer onClick={this.props.toggleCartHidden}>
        {cartCountCircle}
        <CartSvg />
      </EmptyCartContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

//pull state in from redux to local and get the value
// Here memoization is used, via Reselect library, if no memoization is used,
// even if the cart state isnt changed but the user state is changed, this func still gets a new state object
// still re-renders the whole component, that is dumb
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
