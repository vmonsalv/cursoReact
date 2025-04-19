import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    // test('getImagen debe retornar una url de la imagen', async() => {
        // no se puede hacer prueba xq apiKey ya no existe
    //     const url = await getImagen();

    //     expect(typeof url).toBe('string');
    // })

    test('getImagen debe retornar error si no hay apiKey', async() => {
        const response = await getImagen();
        
        expect(response).toBe('No se encontro la imagen');
    })
})