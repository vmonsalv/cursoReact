import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas GifItem", () => {
  const title = "Title Test";
  const url = "http://test.url/";

  test("Debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar imagen con url y alt indicado", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    // screen.debug();

    const { src, alt} = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test("Debe mostrar titulo en el componente", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    // screen.debug();

    expect(screen.getByText(title)).toBeTruthy();

  });
});
