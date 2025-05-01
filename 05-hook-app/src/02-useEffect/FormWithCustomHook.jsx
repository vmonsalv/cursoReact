import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, userName, userEmail, userPassword } = useForm({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  // const { userName, userEmail, userPassword } = formState;

  // useEffect(() => {
  //   // console.log('use effect triggered');
  // }, []);
  // useEffect(() => {
  //   // console.log('formState changed');
  // }, [formState]);

  // useEffect(() => {
  //   // console.log('email changed');
  // }, [userEmail]);

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
    </>
  );
};
