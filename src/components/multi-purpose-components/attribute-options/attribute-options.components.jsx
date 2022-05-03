import React from "react";
import { connect } from "react-redux";
import Options from "../options/options.component";
import { createStructuredSelector } from "reselect";
import { selectAttributes } from "../../../redux/options/options.selectors";

import {
  AttributeLabelSpan,
  AttributeContainer,
} from "./attribute-options.styles";

class AttributeOptions extends React.Component {

  render() {

    const { placement, attribute, inStock, productId, attributeCount, attributesWithSelectedChoices } = this.props;
    const { name } = attribute;

    let attributeChoice = undefined;

    if ( attributesWithSelectedChoices && Object.keys(attributesWithSelectedChoices)) {
      attributeChoice = attributesWithSelectedChoices[name];
    }

    return (
      <AttributeContainer className={placement}>
        <AttributeLabelSpan className={placement}>{name}:</AttributeLabelSpan>
        <Options
          key={productId + name}
          placement={placement}
          options={attribute.items}
          isColor={name == "Color"}
          name={name}
          inStock={inStock}
          productId={productId}
          attributeCount={attributeCount}
          customClick={this.props.customClick}
          attributeChoice={attributeChoice ? attributeChoice : ""}
        />
      </AttributeContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectAttributes: selectAttributes
});

export default connect(mapStateToProps)(AttributeOptions);
