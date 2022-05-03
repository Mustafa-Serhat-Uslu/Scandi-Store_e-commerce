import React from "react";
import { connect } from "react-redux";

import { SizeButtonsContainer } from "./options.styled";

import OptionButton from "../option-button/option-button.component";
import { setAttribute } from "../../../redux/options/options.actions";

class Options extends React.Component {

  constructor(props) {
    super(props);

    let selectedOp;
    const {attributeChoice} = this.props;
    
    attributeChoice ? selectedOp = attributeChoice : selectedOp = "";

    this.state = { selectedOption: selectedOp}
  }

  handleClick(e) {
    this.setState({ selectedOption: e });

    const { name, productId, setOption, attributeCount } = this.props;

    setOption({ id: productId, [name]: e }); // set global state for this objects attribute selections
  }

  render() {
    const { options, placement, isColor, inStock, productId } = this.props;
    let loadingOrShowOptions;

    if (options) {
      loadingOrShowOptions = options.map(({ displayValue, value }) => (
        <OptionButton
          key={value}
          onMiniCart={placement === "onMiniCart" ? true : false}
          runClick={() => this.handleClick(displayValue)}
          isSelected={this.state.selectedOption}
          option={displayValue}
          stockStatus={inStock}
          colorCode={value}
          isColor={isColor}
        ></OptionButton>
      ));
    }

    return (
      <SizeButtonsContainer className={placement}>
        {loadingOrShowOptions}
      </SizeButtonsContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setOption: (option) => dispatch(setAttribute(option)),
});

export default connect(null, mapDispatchToProps)(Options);
