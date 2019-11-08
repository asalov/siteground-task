import { useState } from "react";

export const useModal = (isVisible = false) => {
  const [isModalOpen, setModalOpen] = useState(isVisible);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return [isModalOpen, toggleModal];
};
