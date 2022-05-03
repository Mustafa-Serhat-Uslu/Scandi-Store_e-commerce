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
      selectedAttributeCount: Object.keys(product).filter(x => x.includes("id" || "prices")).reduce((partialSum, key) => partialSum + 1, 0)
    }))
);

// (selectedAttributes) =>
// selectedAttributes?.map((product) => ({
//   id: product["id"],
//   selectedAttributeCount: Object.keys(product).length - 1,
// }))

// const attributeToSet = Object.keys(newOption).find((key) => key != "id");
// const newAttributeVal = Object.entries(newOption)[1][1];

// let existingOptionsForProduct = productOptions?.find(
//   (optionItem) => optionItem.id === newOption.id
// );

// const selectedAttributeCount =
// Object.keys(existingOptionsForProduct).length - 2;
// const allAttributesSelected =
// selectedAttributeCount == newOption["attributeCount"];

// if (allAttributesSelected) {
// existingOptionsForProduct["allAttributesSelected"] = true;
// }
