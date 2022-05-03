// Updates global options for a product
export const updateOptions = (productOptions, newOption) => {

  const attributeToSet = Object.keys(newOption).find((key) => key != "id");
  const newAttributeVal = Object.entries(newOption)[1][1];

  let existingOptionsForProduct = productOptions?.find(
    (optionItem) => optionItem.id === newOption.id
  );

  if (existingOptionsForProduct) {      // Item with id has attribute set before
    existingOptionsForProduct[attributeToSet] = newAttributeVal;
    return [...productOptions];
  } 
  else {                                // Add item to the global attributes state and append the attribute selection
    const productOption = newOption;
    return [...productOptions, productOption];
  }
};