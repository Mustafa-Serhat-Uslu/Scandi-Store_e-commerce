import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import {
  CardContainer,
  ImageContainer,
  ContentContainer,
  ProductName,
  ProductPrice,
  GreenCartContainer,
  OutOfStockLabel,
} from "./product-card.styles";

import { ReactComponent as GreenCart } from "../../../../assets/LittleCircleGreenCart.svg";

import { selectCurrency } from "../../../../redux/switcher/switcher.selectors";

class ProductCard extends React.Component {
  render() {
    const { siteCurrency, history, productData } = this.props;

    const { brand, gallery, id, inStock, name, prices } = productData;

    const priceInSelectedCurrency = prices.filter(
      (price) => price.currency.label === siteCurrency.label
    );
    const displayedPrice =
      siteCurrency.symbol + priceInSelectedCurrency[0].amount.toFixed(2);

    return (
      <CardContainer
        inStock={inStock}
        onClick={() => {
          history.push(`/details/${id}`);
        }}
      >
        <ImageContainer>
          <div className="outOfStockLabelContainer">
            <OutOfStockLabel inStock={inStock}>Out Of Stock</OutOfStockLabel>
          </div>
          <img className="productCardImage" src={gallery[0]} alt="a product" />
          <GreenCartContainer id="cart">
            <GreenCart />
          </GreenCartContainer>
        </ImageContainer>
        <ContentContainer>
          <ProductName>
            {brand} {name}
          </ProductName>
          <ProductPrice>{displayedPrice}</ProductPrice>
        </ContentContainer>
      </CardContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
});

export default withRouter(connect(mapStateToProps)(ProductCard));
