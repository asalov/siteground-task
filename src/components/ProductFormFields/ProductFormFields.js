import React from 'react';

import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const ProductFormFields = ({
  name,
  price,
  currency,
  handleChange
}) => (
  <div>
    <FormGroup controlId="name">
      <ControlLabel>Name</ControlLabel>
      <FormControl
        type="text"
        value={name}
        placeholder="Product name"
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup controlId="price">
      <ControlLabel>Price</ControlLabel>
      <FormControl
        type="text"
        value={price}
        placeholder="Price"
        onChange={handleChange}
      />
    </FormGroup>
    <FormGroup controlId="currency">
      <ControlLabel>Currency</ControlLabel>
      <FormControl
        type="text"
        value={currency}
        placeholder="Currency"
        onChange={handleChange}
      />
    </FormGroup>
  </div>
);

export default ProductFormFields;
