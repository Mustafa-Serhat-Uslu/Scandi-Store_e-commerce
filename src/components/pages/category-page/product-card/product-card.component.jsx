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
  constructor(props) {
    super(props);
    this.state = { outOfStockAnimation: false };
  }

  render() {
    const { productData, siteCurrency, history } = this.props;
    const outOfStockAnimation = this.state.outOfStockAnimation;

    const {brand, gallery, id, inStock, name, prices} = this.props.productData;
    
    const priceInSelectedCurrency = prices.filter(price => price.currency.label === siteCurrency.label);
    const displayedPrice = siteCurrency.symbol +  priceInSelectedCurrency[0].amount;

    return (
      <CardContainer
        inStock={inStock}
        onClick={() => { {
          this.setState({ outOfStockAnimation: true })
          history.push(`/details/${id}`) }
        }}
      >
        <ImageContainer>
          <div className="outOfStockLabelContainer">
            <OutOfStockLabel
              inStock={inStock}
              className={outOfStockAnimation ? "outOfStockAnimation" : ""}
              onAnimationEnd={() =>
                this.setState({ outOfStockAnimation: false })
              }
            >
              Out Of Stock
            </OutOfStockLabel>
          </div>
          <img className="productCardImage" src={gallery[0]} alt="an image of product" />
          <GreenCartContainer id="cart">
            <GreenCart />
          </GreenCartContainer>
        </ImageContainer>
        <ContentContainer>
          <ProductName>{brand} {name}</ProductName>
          <ProductPrice>
              {displayedPrice}
          </ProductPrice>
        </ContentContainer>
      </CardContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency
});

export default withRouter(connect(mapStateToProps)(ProductCard));
