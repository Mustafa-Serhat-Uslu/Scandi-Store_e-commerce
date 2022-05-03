import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { AppStyles, HeaderContainer, PageContainer } from "./App.styles";
import { selectCartHidden } from "./redux/cart/cart.selectors";

import Header from "./components/header/header.component";
import CategoryPage from "./components/pages/category-page/category-page.component";
import DetailsPage from "./components/pages/details-page/details-page.component";
import CartPage from "./components/pages/cart-page/cart-page.component";

class App extends React.Component {
  render() {
    return (
      <AppStyles>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <PageContainer className={!this.props.miniCartHidden ? "miniCartHidden" : undefined}>
          <Switch>
            <Route path="/category" component={CategoryPage} />
            <Route path="/details" component={DetailsPage} />
            <Route path="/cart" component={CartPage} />
            <Route exact path="/" component={CategoryPage} />
          </Switch>
        </PageContainer>
      </AppStyles>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  miniCartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(App);

/*
          <Switch>
            <Route path="/category" component={CategoryPage} />
            <Route path="/cart" component={CartPage} />
            <Route exact path="/" component={CategoryPage} />
          </Switch> 
*/

//            <Route path="/" component={CategoryPage} />
//            <Route exact path="/cart" component={CartPage} />

//<CategoryPage categoryName={`Category name`} />
//<DetailsPage />

// Maybe on click to an item, using unique id create details page

// COMPONENTS

//**Header**
// CategorySelections
// CategoryOption
// HeaderIcon
// CurrencySwitcher
// CurrencyOption
// CartOverlay
// TopCartOverlayLabel
// CartOverlayItem
// CartOverlayTotalLabel
// CartOverlayButtons

// **Pages**
// CategoryPage
// CategoryLabel
// CategoryItem
// ProductPage
// ProductImages
// SmallProductImages
// SelectedProductImage
// ProductDetails
// ProductNameLabel
// ProductDescribtionLabel
// Size...
// CartPage
//CartItem
// Left Section
// Right Section

// **Redux Structure**
// Cart Actions
// TOGGLE_CART_HIDDEN
// ADD_ITEM
// REMOVE_ITEM
// CLEAR_ITEM_FROM_CART
// CLEAR_CART
// Shop ?
// Directory ?

/// Unambigious Things on the task
// On the cart page and the CartOverlay; if we get different sizes of the same item, do we add that as seperate items or add a small symbol for the extra size (I added an extra item to the cart)
// On the detailed product view page, are we supposed to switch between the smaller images and the main image or just show one main image (I implemented switching)
// What to show if can't fetch the items

/*
# ! GraphQL Queries: 
# * Category names for navbar
# * Category page query for all different categories
# * Details page Item details
# * Currencies and signs



# get everything
# query{categories{name products{id}}}

# get all category names for nav bar
# query{
#   categories{
#     name
#   }
# }

# get products for the categories page
# query{
#   category(input: {title: "clothes"}){
#     name
#     products{
#       id
#       inStock
#       gallery
#       brand
#       name
#       prices{
#         currency{label}
#         amount
#       }
#     }
#   }
# }

# get currency labels and symbols
# query{
#   currencies{
#     label
#     symbol
#   }
# }

# # Product query for Details page
query{
  product(id:"jacket-canada-goosee"){
    id
  	name
    inStock
    gallery
    description
    category
    attributes{id}
    brand
    prices{
      currency(label: ""){label} 
      amount
    }
  }
}

*/
