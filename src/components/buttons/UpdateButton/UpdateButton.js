import React from "react";

import ActionButton from "../ActionButton/ActionButton";

const UpdateButton = ({ onClick }) => (
  <ActionButton text="Update" type="success" onClick={onClick} />
);

export default UpdateButton;
