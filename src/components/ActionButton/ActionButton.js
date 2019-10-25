import React from "react";

import { Button } from "react-bootstrap";

const ActionButton = ({ text, buttonStyle, onClick, disabled, ...props }) => (
  <Button
    onClick={onClick}
    bsStyle={buttonStyle}
    disabled={disabled}
    {...props}
  >
    {text}
  </Button>
);

export default ActionButton;
