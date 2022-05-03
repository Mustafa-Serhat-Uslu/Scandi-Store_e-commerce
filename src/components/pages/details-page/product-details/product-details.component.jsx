import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  DetailsPageContainer,
  OptionDetailsContainer,
  DetailsContainer,
  MainDetails,
  DescriptionContainer,
  ItemBrandSpan,
  ItemTypeSpan,
  PriceTextSpan,
  PriceTagSpan,
  PriceInfoContainer,
  NameBrandContainer,
  AttributesContainer,
} from "./product-details.styles";

import { selectedAttributeCounts, selectAttributes } from "../../../../redux/options/options.selectors";
import { selectCurrency } from "../../../../redux/switcher/switcher.selectors";
import { addItem, clearCart } from "../../../../redux/cart/cart.actions";

import Popup from "./../../../multi-purpose-components/popup/popup.component";
import AttributeOptions from "../../../multi-purpose-components/attribute-options/attribute-options.components";
import FilledButton from "../../../multi-purpose-components/filled-button/filled-button.component";
import ProductGallery from "../product-gallery/product-gallery.component";
import Spinner from "../../../multi-purpose-components/spinner/spinner.component";

class ProductDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = { initPopup: false }; 
  }

  render() {

    const {
      queryData,
      siteCurrency,
      addItemToCart,
      clearCart,
      readyProducts,
      selectAttributes,
      selectedAttributeCounts,
    } = this.props;

    let loadOrShowDetailsPage;

    if (queryData) {                      // ########## IF DATA FETCHED ########## //

      const {
        attributes,
        brand,
        category,
        description,
        gallery,
        id,
        inStock,
        name,
        prices,
      } = queryData.product;

      // attributesWithSelectedChoices is used by individual buttons {id: 'apple-imac-2021', Capacity: '512GB', ...}
      let attributesWithSelectedChoices = Object.values(selectAttributes).find(
      (productSelections) => productSelections.id == id);

      if(!attributesWithSelectedChoices){
        attributesWithSelectedChoices = {id: id};
      }

      // Passed to popup to run on popup button click
      let resetPopupState = () => {
        this.setState({initPopup: false });
      }

      // Set price label
      const priceInSelectedCurrency = prices.filter(
        (price) => price.currency.label === siteCurrency.label);

      const displayedPrice = siteCurrency.symbol + priceInSelectedCurrency[0].amount;

      // Check if item can be added to cart
      let addToCartActive = attributes.length == 0 ? true : false; 
      
      let selectedAttributeCount = selectedAttributeCounts.filter(
        item => item.id == id).map(item => item["selectedAttributeCount"]);

      attributesWithSelectedChoices["prices"] = JSON.parse(JSON.stringify(prices));

      if (Object.keys(attributesWithSelectedChoices).length -2 == attributes.length){
        addToCartActive = true;
      }

      // AddToCart button press triggers this function
      let handleAddToCart = () => {
        if (addToCartActive){ 
          addItemToCart(JSON.parse(JSON.stringify(attributesWithSelectedChoices)))
        } 
        else{
          this.setState({initPopup: true });
        }  
      }

      loadOrShowDetailsPage = (
        <DetailsContainer>
          <MainDetails>
            <ProductGallery imgs={gallery} />

            <OptionDetailsContainer>
              <NameBrandContainer>
                <ItemBrandSpan>{brand}</ItemBrandSpan>
                <ItemTypeSpan>{name}</ItemTypeSpan>
              </NameBrandContainer>

              <AttributesContainer key={gallery[0]}>
                {attributes.map((attribute, index) => (
                  <AttributeOptions
                    key={id + index}
                    placement={"onDetailsPage"}
                    attribute={attribute}
                    inStock={inStock}
                    productId={id}
                    attributeCount={attributes.length}
                    attributesWithSelectedChoices={attributesWithSelectedChoices}
                  />
                ))}
              </AttributesContainer>

              <PriceInfoContainer>
                <PriceTextSpan>Price:</PriceTextSpan>
                <PriceTagSpan>{displayedPrice}</PriceTagSpan>
              </PriceInfoContainer>

              <FilledButton
                placement="onDetailsPage"
                inStock={inStock}
                buttonText={ inStock ? "ADD TO CART" : "OUT OF STOCK"}
                customClickEvent={ () => inStock && handleAddToCart() } 
              />

              <DescriptionContainer>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </DescriptionContainer>
            </OptionDetailsContainer>
          </MainDetails>

          {this.state.initPopup && <Popup initPopup={true} customEvent={() => resetPopupState()} />}

        </DetailsContainer>
      );
    } 
    else                                             // ########## NO DATA ########## //
    { 
      loadOrShowDetailsPage = <Spinner/>; 
    }

    return <DetailsPageContainer>{loadOrShowDetailsPage}</DetailsPageContainer>;
  }
}

const mapStateToProps = createStructuredSelector({
  siteCurrency: selectCurrency,
  selectAttributes: selectAttributes,
  selectedAttributeCounts: selectedAttributeCounts,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
