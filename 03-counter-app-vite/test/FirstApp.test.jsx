import { FirstApp } from "../src/FirstApp"
import { render } from "@testing-library/react"

describe('Pruebas FirstApp', () => {

    // en desarrollo no es recomendable hacer esta prueba xq el dom va cambiando seguido
    // test('Debe hacer match con el snapshot ', () => {
    //     const title="Title Test"
    //     const { container } = render(
    //         <FirstApp
    //             title={title}
    //             subTitle={"Un subtítulo"}
    //             name={'Gon Freecs'}
    //         />
    //     )

    //     expect(container).toMatchSnapshot();
    // });

    test('Debe mostrar el título en h1', () => {
        const title="Title Test"
        const { container, getByText, getByTestId } = render(
            <FirstApp
                title={title}
            />
        )

        // expect(getByText(title)).toBeTruthy();

        // //no recomendado
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title); //tener cuidado con los especios dentro de la etiqueta
        // expect(h1.innerHTML).toContain(title);

        // expect(getByTestId('test-title').innerHTML).toBe(title); // prueba rígida
        expect(getByTestId('test-title').innerHTML).toContain(title); // prueba flexible
    })

    test('Debe mostrar el subtítulo enviado por props', () => {
        const title="Title Test";
        const subtitle = "subtitulo test";
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subtitle}
            />
        )

        // getBy se asegura que haya solo una coincidencia y arroja error si encuentra más
        // expect(getByText(subtitle)).toBeTruthy();

        //getAllByText devuelve un arreglo de elementos
        expect(getAllByText(subtitle).length).toBe(2);
    })
})