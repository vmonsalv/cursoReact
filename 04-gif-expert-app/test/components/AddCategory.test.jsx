import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas AddCategory", () => {
  const inputValue = "Saitama";

  test("Debe cambiar el valor de la caja de texto", () => {
    //tipad props, se envía una función
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    // screen.debug();
    expect(input.value).toBe(inputValue);
  });
});
