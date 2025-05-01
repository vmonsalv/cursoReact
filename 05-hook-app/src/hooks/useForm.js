import { useState } from "react";

export const useForm = (initialFormulario = {}) => {
  const [formState, setFormState] = useState(initialFormulario);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
