import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas CounterApp', () => {
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(
            <CounterApp/>
        )

        expect(container).toBeTruthy();
    })

    test('Debe mostrar el valor inicial de 100', () => {
        const valor = '100';
        render(
            <CounterApp
                value={valor}
            />
        );

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(valor);
        expect(screen.getByText(valor)).toBeTruthy();
    })
})