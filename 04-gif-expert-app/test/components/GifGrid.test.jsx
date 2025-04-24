import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Prueba GifGrid", () => {
  const category = "One punch";

  test("Debe mostrar isLoading inicialmente", () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    })
    render(<GifGrid category={category} />);

    // screen.debug();

    expect(screen.getByText("Cargando ...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("Debe mostrar items cuando se cargan las imágenes con useFetchGifs", () => {
    const gifs = [{
        id: '123',
        title: 'La prueba',
        url: 'http://test.cl/'
    }]
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })

    render(<GifGrid category={category} />)

    // screen.debug();

    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
