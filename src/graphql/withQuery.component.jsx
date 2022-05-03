import React from "react";
import { useQuery } from "@apollo/client";

const WithQuery = (WrappedComponent, query) => {
  const WrapperWithQuery = (props) => {
      
    const { queryCall, queryVariable } = query;

    var { data, loading, error } = useQuery(queryCall, queryVariable);

    if (loading) {
      console.log("Loading query data...");
    }
    if (error) {
      console.log(error.message);
    }

    return <WrappedComponent queryData={data} {...props} />;
  };

  return WrapperWithQuery;
};

export default WithQuery;
