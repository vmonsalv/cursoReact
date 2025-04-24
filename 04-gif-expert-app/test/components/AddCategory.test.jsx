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

  test("debe llamar onNewCategory si el input tiene un valor", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test("NO debe llamar onNewCategory si el input está vacío", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
