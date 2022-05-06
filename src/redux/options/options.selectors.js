import { createSelector } from "reselect";

const attributes = (state) => state.options;

export const selectAttributes = createSelector(
  [attributes],
  (options) => options.productOptions
);

export const selectedAttributeCounts = createSelector(
  [selectAttributes],
  (selectedAttributes) =>
    selectedAttributes?.map((product) => ({
      id: product["id"],
      selectedAttributeCount: Object.keys(product)
        .filter((x) => x.includes("id" || "prices"))
        .reduce((partialSum, key) => partialSum + 1, 0),
    }))
);
