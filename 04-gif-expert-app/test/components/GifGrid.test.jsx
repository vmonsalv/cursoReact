import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Prueba GifGrid", () => {
  const category = "One punch";
  test("Debe mostrar isLoading inicialmente", () => {
    render(<GifGrid category={category} />)

    // screen.debug();

    expect(screen.getByText('Cargando ...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('Debe mostarr items cuando se cargan las imágenes con useFetchGifs', () => {
    
  })
});
