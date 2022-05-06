import React from "react";
import { connect } from "react-redux";

import {
  CurrencyItemConstainer,
  CurrencySwitcherContainer,
} from "./currency-switcher.styles";

import {
  setCurrency,
} from "../../../redux/switcher/switcher.actions";

class CurrencySwitcher extends React.Component {

  render() {
    const { queryData, setSiteCurrency } = this.props;

    let loadData;

    if (queryData) {
      loadData = queryData.currencies.map((currency) => (
        <CurrencyItemConstainer
          key={currency.symbol}
          onClick={() => setSiteCurrency(currency)}
        >
          <span className="signSpan">{currency.symbol}</span>
          <span>{currency.label}</span>
        </CurrencyItemConstainer>
      ));
    } else {
      loadData = <h1>LOADING</h1>; 
    }

    return (
      <CurrencySwitcherContainer>
        <span/>
        {loadData}
      </CurrencySwitcherContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSiteCurrency: (currency) => dispatch(setCurrency(currency)),
});

export default connect(null, mapDispatchToProps)(CurrencySwitcher);
