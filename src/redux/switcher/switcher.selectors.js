import { createSelector } from "reselect";

const selectSwitcher = (state) => state.switcher;

export const selectSwitcherHidden = createSelector(
  [selectSwitcher],
  (switcher) => switcher.hidden
);

export const selectCurrency = createSelector(
  [selectSwitcher],
  (switcher) => switcher.selectedCurrency
);