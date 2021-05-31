import React from "react";

import { Button, Wrapper } from "./styles/QuickOptions";

export default function QuickOptions({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

QuickOptions.Button = function QuickOptionsButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
