import React from "react";

import ProductDetails from "./product-details/product-details.component";
import QueryWithVar from "../../../graphql/query-with-variable.component";
import { PRODUCT } from "../../../graphql/queries";

class ProductQuery extends React.Component {
  render() {
    const { match } = this.props;
    const queryVariable = {
      variables: { productId: match.params.detailsProductId },
    };

    return (
      <QueryWithVar query={PRODUCT} queryVariable={queryVariable}>
        <ProductDetails />
      </QueryWithVar>
    );
  }
}

export default ProductQuery;
