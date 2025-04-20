import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas CounterApp', () => {
    const initialValue = 100;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(
            <CounterApp/>
        )

        expect(container).toBeTruthy();
    })

    test('Debe mostrar el valor inicial de 100', () => {
        render(
            <CounterApp
                value={100}
            />
        );

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
        expect(screen.getByText('100')).toBeTruthy();
    })

    test('Debe incrementar con el botón +1', () => {
        render(
            <CounterApp
                value={initialValue}
            />
        );

        fireEvent.click(screen.getByText("+1"));

        expect(screen.getByText('101')).toBeTruthy();
    })

    test('Debe decrementar con el botón +1', () => {
        render(
            <CounterApp
                value={initialValue}
            />
        );

        fireEvent.click(screen.getByText("-1"));
        // screen.debug();
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('Debe funcionar botón reset', () => {
        render(
            <CounterApp
                value={initialValue}
            />
        );

        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByText("-1"));
        fireEvent.click(screen.getByText("-1"));

        // fireEvent.click(screen.getByText("Reset"));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}))

        // screen.debug();
        expect(screen.getByText('0')).toBeTruthy();
    })
})