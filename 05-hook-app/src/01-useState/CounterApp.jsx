import { useState } from "react";

export const CounterApp = () => {
  // el valor inicial de useState puede ser no solo un valor primitivo (entero, arreglo, etc.)
  // sino que también puede ser una clase o un objeto
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

        {/* si se hace onClick={() => setCounter(counter1 + 1)}, la app se cae
        xq se está mutando el counter, pasa de ser un objeto a un entero. (js es permisible)
        setCounter lo que hace es decir que lo que se le pasa por parámetro es el nuevo valor del state
         */}

      <button className="btn" onClick={() => setCounter({
        ...state,
        counter1: counter1 + 1,
      })}>
        +1
      </button>
    </>
  );
};
