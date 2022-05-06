import React from "react";
import { connect } from "react-redux";

import {
  BlackCircleContainer,
  CartCount,
  EmptyCartContainer,
} from "./cart-icon.styles";

import { ReactComponent as CartSvg } from "../../../assets/EmptyCart.svg";
import { ReactComponent as BlackCircleSvg } from "../../../assets/MiniCartBlackCircle.svg";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

class CartIcon extends React.Component {
  render() {
    const {cartCount, toggleCartHidden} = this.props;
    let cartCountCircle;

    if (this.props.cartCount) {
      cartCountCircle = (
        <BlackCircleContainer>
          <BlackCircleSvg />
          <CartCount>{cartCount}</CartCount>
        </BlackCircleContainer>
      );
    } else {
      cartCountCircle = null;
    }

    return (
      <EmptyCartContainer onClick={toggleCartHidden}>
        {cartCountCircle}
        <CartSvg />
      </EmptyCartContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
