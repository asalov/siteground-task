import React from "react";

import { Button } from "react-bootstrap";

const ActionButton = ({ text, type, onClick, disabled, ...props }) => (
  <Button onClick={onClick} bsStyle={type} disabled={disabled} {...props}>
    {text}
  </Button>
);

export default ActionButton;
