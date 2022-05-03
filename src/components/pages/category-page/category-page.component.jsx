import React from "react";
import { Route } from "react-router-dom";
import CategoryQuery from "./category-query/category-query.component"; 

class CategoryPage extends React.Component {
  
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={CategoryQuery}
        />
        <Route exact path={`${match.path}`} component={CategoryQuery} />
      </div>
    );
  }
}

export default CategoryPage;
