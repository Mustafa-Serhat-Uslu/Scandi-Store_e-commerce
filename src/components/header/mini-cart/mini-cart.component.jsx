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

import { selectCartItems, selectCartItemsCount, selectCartTotal  } from "../../../redux/cart/cart.selectors";
import { selectCurrency } from "../../../redux/switcher/switcher.selectors";
import QueryWithVar from "../../../graphql/query-with-variable.component";
import { toggleCartHidden } from "../../../redux/cart/cart.actions.js";
import {PRODUCT} from "../../../graphql/queries";

import FilledButton from "../../multi-purpose-components/filled-button/filled-button.component";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.toggleMiniCart();
    }
  }

  render() {

    const {toggleMiniCart, selectCartItems, selectCartItemsCount, selectCartTotal, siteCurrency} =this.props;


    const totalPrice = selectCartTotal.map(it => it.prices.filter(
      (price) => price.currency.label === siteCurrency.label)[0]["amount"] * it.quantity).reduce((partialSum, a) => partialSum + a, 0);

    return (
      <MiniCartContainer ref={this.wrapperRef}>
        <span>
          <b>My Bag,</b> {selectCartItemsCount} Items
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
          <span>{siteCurrency.symbol + (totalPrice).toFixed(2)}</span>
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

const mapDispatchToProps = (dispatch) => ({
  toggleMiniCart: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
  selectCartItems: selectCartItems,
  selectCartTotal: selectCartTotal,
  selectCartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
