import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch("https://pokeapi.co/api/v2/pokemon/1");
  return (
    <>
      <h1>Información del Pokemon</h1>
      <hr />

      {isLoading && <p>Cargado ...</p>}
      { !isLoading && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};
