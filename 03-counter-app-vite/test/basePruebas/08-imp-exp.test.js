/**  * @jest-environment jsdom  */
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeById debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);


        expect(heroe.name).toEqual('Batman');
    })

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);


        expect(heroe).toBeUndefined();
        // expect(heroe).toBeFalsy(); false también se considera falsy
    })

    test('getHeroesByOwner debe retornar arreglo con con los héroes DC (3)', () => {
        const owner = 'DC';
        const dcHeroes = getHeroesByOwner('DC');
        const heroesTest = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }];


        expect(dcHeroes.length).toBe(3);
        expect(dcHeroes).toEqual(heroesTest);

        // ideal que sea así, la prueba es más flexible
        expect(dcHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
    })

    test('getHeroesByOwner debe retornar arreglo con con los héroes Marvel (2)', () => {
        const marvelHeroes = getHeroesByOwner('Marvel');
        const heroesTest = [
        {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]


        expect(marvelHeroes.length).toBe(2);
        expect(marvelHeroes).toEqual(heroesTest);
    })

})
