import React from "react";
import { gql } from "@apollo/client";

import Query from "../../../graphql/query.component";
import Navigation from "./navigation.component";
import { CATEGORY_NAMES } from "../../../graphql/queries";

class NavigationQuery extends React.Component {
  render() {
    return (
      <Query query={CATEGORY_NAMES}>
        <Navigation />
      </Query>
    );
  }
}

export default NavigationQuery;
