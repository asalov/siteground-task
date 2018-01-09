import React from 'react';

import { Button } from 'react-bootstrap';

const ActionButton = ({ text, type, onClick }) => (
  <Button
    onClick={onClick}
    bsStyle={type}
  >{text}</Button>
);

export default ActionButton;
