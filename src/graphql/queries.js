import { gql } from "@apollo/client";

export const CATEGORY_NAMES = gql`
  query {
    categories {
      name
    }
  }
`;

export const CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const CATEGORY = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        inStock
        gallery
        brand
        name
        prices {
          currency {
            label
          }
          amount
        }
      }
    }
  }
`;

export const PRODUCT = gql`
  query ($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
      brand
      prices {
        currency {
          label
        }
        amount
      }
    }
  }
`;
