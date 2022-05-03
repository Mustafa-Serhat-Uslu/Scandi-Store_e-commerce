import React from "react";
import { Route } from "react-router-dom";

import ProductQuery from "./product-details-query.component";

const DetailsPage = ({ match }) => {

  return (
    <div>
      <Route
        exact
        path={`${match.path}/:detailsProductId`}
        component={ProductQuery}
      />
    </div>
  );
};

export default DetailsPage;
