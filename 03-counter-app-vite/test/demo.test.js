describe('Pruebas de DemoComponent', () => {
    
    test('Esta prueba no puede fallar', () => {
        // 1. inicialización
        const message1 = "Hola mundo";
        // 2. estímulo
        const message2 = message1.trim();
    
        // 3. observar comportamiento ... esperado
        expect(message1).toBe(message2);
    })
})
