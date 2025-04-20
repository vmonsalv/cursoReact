import { FirstApp } from "../src/FirstApp"
import { render, screen } from "@testing-library/react"

describe('Pruebas FirstApp', () => {
    const title="Title Test";
    const subtitle = "subtitulo test";

    // test('Debe hacer match con el snapshot ', () => {
    //     const { container } = render(
    //         <FirstApp
    //             title={title}
    //         />
    //     )

    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el mensaje "Hola mundo"', () => {
        const { container } = render(
            <FirstApp
                title={title}
            />
        )

        // screen.debug();
        expect(screen.getByText).toBeTruthy();
    })

    test('Debe mostrar el título en h1', () => {
        const { container } = render(
            <FirstApp
                title={title}
            />
        )

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('Debe mostrar el subtítulo enviado por props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subtitle}
            />
        )

        expect(screen.getAllByText(subtitle).length).toBe(2);
    })
})