import React from "react";
import { connect } from "react-redux";

import { SizeButtonsContainer } from "./options.styled";

import OptionButton from "../option-button/option-button.component";
import { setAttribute } from "../../../redux/options/options.actions";

class Options extends React.Component {
  constructor(props) {
    super(props);

    let selectedOp;
    const { attributeChoice } = this.props;

    attributeChoice ? (selectedOp = attributeChoice) : (selectedOp = "");

    this.state = { selectedOption: selectedOp };
  }

  handleClick(e) {
    const { name, productId, setOption } = this.props;
    this.setState({ selectedOption: e });
    setOption({ id: productId, [name]: e }); // Set global state for this objects attribute selections
  }

  render() {
    const { options, placement, isColor, inStock } = this.props;
    const { selectedOption } = this.state;
    let loadingOrShowOptions;

    if (options) {
      loadingOrShowOptions = options.map(({ displayValue, value }) => (
        <OptionButton
          key={value}
          onMiniCart={placement === "onMiniCart" ? true : false}
          runClick={() => this.handleClick(displayValue)}
          isSelected={selectedOption}
          option={displayValue}
          value={value}
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
