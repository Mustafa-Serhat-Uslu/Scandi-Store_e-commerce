import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  MiniCartButtonsContainer,
  MiniCartContainer,
  ScrollView,
  TotalLabelContainer,
  ViewBagButton,
} from "./mini-cart.styles";

import CartItem from "../../multi-purpose-components/cart-item/cart-item.component";

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../../redux/cart/cart.selectors";

import FilledButton from "../../multi-purpose-components/filled-button/filled-button.component";
import { selectCurrency } from "../../../redux/switcher/switcher.selectors";
import QueryWithVar from "../../../graphql/query-with-variable.component";
import { PRODUCT } from "../../../graphql/queries";


class MiniCart extends React.Component {
  render() {
    const {
      toggleMiniCart,
      selectCartItemsCount,
      selectCartTotal,
      siteCurrency,
      selectCartItems,
    } = this.props;

    const totalPrice = selectCartTotal
      .map(
        (it) =>
          it.prices.filter(
            (price) => price.currency.label === siteCurrency.label
          )[0]["amount"] * it.quantity
      )
      .reduce((partialSum, a) => partialSum + a, 0);

    return (
      <MiniCartContainer>
        <span>
          <b>My Bag,</b> {selectCartItemsCount} items
        </span>

        <ScrollView>
          {selectCartItems.length ? (
            selectCartItems.map(({ item, quantity }, index) => (
              <div key={index + item.id}>
                <QueryWithVar
                  query={PRODUCT}
                  queryVariable={{ variables: { productId: item.id } }}
                >
                  <CartItem item={item} quantity={quantity} onMiniCart={true} />
                </QueryWithVar>
              </div>
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </ScrollView>

        <TotalLabelContainer>
          <span>Total</span>
          <span>{siteCurrency.symbol + totalPrice.toFixed(2)}</span>
        </TotalLabelContainer>

        <MiniCartButtonsContainer>
          <ViewBagButton
            className="viewBagButton"
            to="/cart"
            onClick={toggleMiniCart}
          >
            <span>VIEW BAG</span>
          </ViewBagButton>
          <FilledButton placement="onMiniCart" buttonText={"CHECK OUT"} />
        </MiniCartButtonsContainer>
      </MiniCartContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
  selectCartItems: selectCartItems,
  selectCartTotal: selectCartTotal,
  selectCartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(MiniCart);
