import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            //se ejecuta cuando la promesa se resuelva y jest se queda esperando la llamada a esta función
            done();
        });
    })

    test('getHeroeByIdAsync debe obtener error si héroe no existe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id).
        catch((error) => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        });
    })

    // test('getHeroeByIdAsync debe retornar un héroe', async () => {
    //     const id = 1;

    //     const heroe = await getHeroeByIdAsync(1);
    // })
})