import React from "react";
import { gql } from "@apollo/client";

import QueryWithVar from "../../../../graphql/query-with-variable.component";
import ProductsOverview from "../product-overview/product-overview.component";
import { CATEGORY } from "../../../../graphql/queries";

// CategoryQuery component takes the categoryName to query spesific category usign Query component

class CategoryQuery extends React.Component {
  render() {
    let categoryName = this.props.match.params.categoryId;

    if (categoryName == undefined){ // On default route categoryName is undefined
      categoryName = "all";
    }

    const queryVariable = { variables: { title: categoryName } };

    return (
      <QueryWithVar query={CATEGORY} queryVariable={queryVariable}>
        <ProductsOverview categoryName={categoryName} />
      </QueryWithVar>
    );
  }
}

export default CategoryQuery;
