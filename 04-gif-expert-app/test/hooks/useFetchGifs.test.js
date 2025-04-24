import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas hook useFetchGifs", () => {
  test("Debe regresar estado inicial", () => {
    const { result } = renderHook(() => {
        return useFetchGifs("One punch");
    });
    
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("Debe regresar un arreglo y el isLoading en false", async () => {
    const { result } = renderHook(() => {
      return useFetchGifs("One punch");
    });

    // espera a que el hook complete su ejecución
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // {
      //     timeout: 10
      // }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
