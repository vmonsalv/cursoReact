import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 05-funciones', () => {
    
    test('retornaArreglo debe retornar un string y número', () => {
        const [ cadena, numero] = retornaArreglo();

        
        expect(cadena).toBe('ABC');
        expect(numero).toBe(123);

        expect(cadena).toEqual(expect.any(String));
    })

})
