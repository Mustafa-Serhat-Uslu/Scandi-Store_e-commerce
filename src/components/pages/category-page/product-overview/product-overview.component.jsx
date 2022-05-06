import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CategoryName, CardItemsContainer } from "./product-overview.styles";

import ProductCard from "../product-card/product-card.component";
import { selectCurrency } from "../../../../redux/switcher/switcher.selectors";
import Spinner from "../../../multi-purpose-components/spinner/spinner.component";

class ProductsOverview extends React.Component {
  render() {
    const { queryData, categoryName } = this.props;

    let loadOrShowData;

    if (queryData !== undefined) {
      loadOrShowData = (
        <CardItemsContainer>
          {queryData.category.products.map((productData) => (
            <ProductCard key={productData.id} productData={productData} />
          ))}
        </CardItemsContainer>
      );
    } else {
      loadOrShowData = <Spinner />;
    }

    return (
      <div>
        <CategoryName>
          <span>{categoryName ? categoryName : "All"}</span>
        </CategoryName>
        {loadOrShowData}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
});

export default connect(mapStateToProps)(ProductsOverview);
