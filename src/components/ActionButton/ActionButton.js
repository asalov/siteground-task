import React from "react";

import { Button } from "react-bootstrap";

const ActionButton = ({
  text,
  buttonStyle = "default",
  onClick,
  disabled = false,
  ...props
}) => (
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
