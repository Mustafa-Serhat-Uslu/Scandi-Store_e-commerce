import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CartLabel, CartItemsContainer, ItemBorder, CartBottomInfo, BottomInfoSpan } from "./cart-page.styles";

import CartItem from "../../multi-purpose-components/cart-item/cart-item.component";
import FilledButton from "../../multi-purpose-components/filled-button/filled-button.component";
import { selectCartItems, selectCartItemsCount, selectCartTotal } from "../../../redux/cart/cart.selectors";
import { selectCurrency } from "../../../redux/switcher/switcher.selectors";

import { PRODUCT } from "../../../graphql/queries";
import QueryWithVar from "../../../graphql/query-with-variable.component";

class CartView extends React.Component {
  render() {
    const { selectCartItems, selectCartTotal, selectCartItemsCount, siteCurrency } = this.props;

     const totalPrice = selectCartTotal.map(it => it.prices.filter(
           (price) => price.currency.label === siteCurrency.label)[0]["amount"] * it.quantity).reduce((partialSum, a) => partialSum + a, 0);
    
           return (
      <>
        <CartLabel>Cart</CartLabel>

        <CartItemsContainer>
          {selectCartItems.length ? (
            selectCartItems.map(({ item, quantity }, index) => (
              <div key={index + item.id}>
                <ItemBorder />
                <QueryWithVar query={PRODUCT} queryVariable={{ variables: { productId: item.id } }}>
                    <CartItem item={item} quantity={quantity} />
                </QueryWithVar>
              </div>
            ))
          ) : (
            <h1>No Items Added To Cart.</h1> // TO DO add spin
          )}
          <ItemBorder />

            <CartBottomInfo> 
              <BottomInfoSpan>Tax: <b>{siteCurrency.symbol + (totalPrice * 0.075).toFixed(2)}</b></BottomInfoSpan> {/* tax rate 7.5% */}
              <BottomInfoSpan>Qty: <b>{selectCartItemsCount}</b></BottomInfoSpan>
              <br/>
              <BottomInfoSpan>Total: <b>{siteCurrency.symbol + (totalPrice).toFixed(2)}</b> </BottomInfoSpan>
              <FilledButton inStock={true} buttonText={"ORDER"} />
            </CartBottomInfo>

        </CartItemsContainer>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
  selectCartItems: selectCartItems,
  selectCartTotal: selectCartTotal,
  selectCartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartView);
