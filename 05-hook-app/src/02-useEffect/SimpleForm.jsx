import { useEffect, useState } from "react";
import { Message } from "./Message";

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
  // no se recomienda que se utilice un useEffect sin una dependencia (2do argumento)
  // las dependencias son las condiciones por las cuales queremos que useEffect se vuelva a disparar
  // si se le pasa [] es xq queremos que se ejecute solo una vez ("no hay condiciones para que se vuelva a llamar el useEffect")
  // se recomienda que se creen un useEffect especializado y específicos por cada acción que se quiere ejecutar
  // no uno que haga muchas acciones.
  useEffect(() => {
    // console.log('use effect triggered');
  }, []);
  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [userEmail]);
  

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

      {
        userName === 'barto2' && <Message/>
      }
    </>
  );
};
