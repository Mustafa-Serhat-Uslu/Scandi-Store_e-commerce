import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartItemContainer,
  RightPaneContainer,
  LeftPaneContainer,
  ItemPriceSpan,
  AmountPaneContainer,
  CartItemVisualContainer,
  ItemBrandSpan,
  ItemTypeSpan,
  AttributesContainer,
  QuantitySpan,
  MiniCartImage,
} from "./cart-item.styles";

import DecrementButton from "../increment-decrement-button/decrement-button.component";
import IncrementButton from "../increment-decrement-button/increment-button.component";
import Carousel from "../carousel/carousel.component";
import AttributeOptions from "../attribute-options/attribute-options.components";

import { selectCurrency } from "../../../redux/switcher/switcher.selectors";
import { addItem, removeItem } from "../../../redux/cart/cart.actions";

// Set according to the attribute counts
const miniCartItemHeights = {
  0: "180px",
  1: "190px",
  2: "200px",
  3: "260px",
  4: "300px",
  5: "345px",
};

class CartItem extends React.Component {
  render() {
    const {
      onMiniCart,
      siteCurrency,
      item,
      quantity,
      queryData,
      addItemToCart,
      removeItemFromCart,
    } = this.props;

    const { id, ...selectedAttrs } = item;

    const placement = onMiniCart ? "onMiniCart" : "onCartPage";

    let loadOrShowCartItem;

    if (queryData) {
      const { attributes, brand, gallery, id, inStock, name, prices } =
        queryData.product;

      // Set price label
      const priceInSelectedCurrency = prices.filter(
        (price) => price.currency.label === siteCurrency.label
      );

      const displayedPrice =
        siteCurrency.symbol + priceInSelectedCurrency[0].amount.toFixed(2);

      loadOrShowCartItem = (
        <CartItemContainer
          className={placement}
          heightOfMiniCartItem={miniCartItemHeights[attributes.length]}
        >
          <LeftPaneContainer className={placement}>
            <ItemBrandSpan className={placement}>{brand}</ItemBrandSpan>
            <ItemTypeSpan className={placement}>{name}</ItemTypeSpan>
            <ItemPriceSpan className={placement}>
              {displayedPrice}
            </ItemPriceSpan>

            <AttributesContainer>
              {attributes.map((attribute, index) => (
                <AttributeOptions
                  key={id + index}
                  attribute={attribute}
                  inStock={inStock}
                  productId={id}
                  placement={placement}
                  attributeCount={attributes.length}
                  attributesWithSelectedChoices={selectedAttrs}
                />
              ))}
            </AttributesContainer>
          </LeftPaneContainer>

          <RightPaneContainer className={placement}>
            <AmountPaneContainer className={placement}>
              <IncrementButton
                placement={placement}
                customClickEvent={() =>
                  addItemToCart(JSON.parse(JSON.stringify(item)))
                }
              />
              <QuantitySpan className={placement}>{quantity}</QuantitySpan>
              <DecrementButton
                placement={placement}
                customClickEvent={() =>
                  removeItemFromCart(JSON.parse(JSON.stringify(item)))
                }
              />
            </AmountPaneContainer>
            <CartItemVisualContainer>
              {onMiniCart ? (
                <MiniCartImage
                  className="miniCartImage"
                  src={gallery[0]}
                  alt="example"
                />
              ) : (
                <Carousel
                  images={gallery}
                  hasMultipleImages={gallery.length > 1 ? true : false}
                />
              )}
            </CartItemVisualContainer>
          </RightPaneContainer>
        </CartItemContainer>
      );
    } else {
      loadOrShowCartItem = <h2>Loading Cart Item...</h2>;
    }

    return <>{loadOrShowCartItem}</>;
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
