import React from "react";
import { connect } from "react-redux";

import {
  CurrencyItemConstainer,
  CurrencySwitcherContainer,
} from "./currency-switcher.styles";

import {
  toggleSwitcherHidden,
  setCurrency,
} from "../../../redux/switcher/switcher.actions";

import { CURRENCIES } from "../../../graphql/queries";

class CurrencySwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.toggleSwitcherHidden();
    }
  }

  render() {
    const { queryData } = this.props;

    if (queryData) {
      console.log("CURRENCIES: ");
      console.log(queryData);
    }

    let loadData;

    if (queryData) {
      loadData = queryData.currencies.map((currency) => (
        <CurrencyItemConstainer
          key={currency.symbol}
          onClick={() => this.props.setSiteCurrency(currency)}
        >
          <span className="signSpan">{currency.symbol}</span>
          <span>{currency.label}</span>
        </CurrencyItemConstainer>
      ));
    } else {
      loadData = <h1>LOADING</h1>; // TO DO
    }

    return (
      <CurrencySwitcherContainer ref={this.wrapperRef}>
        <span></span>
        {loadData}
      </CurrencySwitcherContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSwitcherHidden: () => dispatch(toggleSwitcherHidden()),
  setSiteCurrency: (currency) => dispatch(setCurrency(currency)),
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);
