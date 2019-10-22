import React from "react";

import { Button } from "react-bootstrap";

const ActionButton = ({ text, type, onClick, ...props }) => (
  <Button onClick={onClick} bsStyle={type} {...props}>
    {text}
  </Button>
);

export default ActionButton;
