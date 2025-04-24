import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas helper getGifs', () => {
    
    test('debe retornar arreglo de gifs', async () => {
        const gifs = await getGifs('One punch');        

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),// cualquier string
            title: expect.any(String),
            url: expect.any(String)
        });
    })
})