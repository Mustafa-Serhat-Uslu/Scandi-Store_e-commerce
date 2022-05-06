import React from "react";
import { useQuery } from "@apollo/client";

// This utility component take a query call and adds the returned data to childs props as "queryData"

const Query = ({ query, children, ...other }) => {
  const { data, error } = useQuery(query);

  if (error) {
    console.log(error.message);
  }

  return (
    <div {...other}>{React.cloneElement(children, { queryData: data })}</div>
  );
};

export default Query;
