import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {
    formState,
    onInputChange,
    userName,
    userEmail,
    userPassword,
    onResetForm,
  } = useForm({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  // const { userName, userEmail, userPassword } = formState;

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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="userPassword"
        value={userPassword}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
