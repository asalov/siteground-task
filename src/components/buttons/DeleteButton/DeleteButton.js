import React from "react";

import ActionButton from "../ActionButton/ActionButton";

const DeleteButton = ({ onClick }) => (
  <ActionButton text="Delete" type="danger" onClick={onClick} />
);

export default DeleteButton;
