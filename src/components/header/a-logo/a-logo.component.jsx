import React from "react";

import { LogoTransparent } from "./a-logo.styles";

import { ReactComponent as LogoBrandIcon } from "../../../assets/BrandIcon.svg";

const Logo = () => (
  <LogoTransparent>
    <LogoBrandIcon />
  </LogoTransparent>
);

export default Logo;
