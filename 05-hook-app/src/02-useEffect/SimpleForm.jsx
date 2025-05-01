import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "barto",
    userEmail: "barto@correo.com",
  });

  const { userName, userEmail } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect es para disparar efectos secundarios
  useEffect(() => {
    console.log('use effect triggered');
  })
  

  return (
    <>
      <h1>Formulario simple</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="User name"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@react.com"
        name="userEmail"
        value={userEmail}
        onChange={onInputChange}
      />
    </>
  );
};
