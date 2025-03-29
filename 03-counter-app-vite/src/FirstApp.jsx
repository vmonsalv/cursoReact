//fragment permite agrupar más de un elemento html bajo el mismo padre
// se debe importar fragment de react
// una alternatica es usar <></> (un sínonimo de fragment)

// una regla de react es que si la variable no se está cambiando o no está relacionado a un hook
// debería ir fuera del functional component.
// Beneficios: reacto no reprocesa o re renderiza lo que está fuera del functional component
// objetos no se pueden renderizar
const message = 'First App!!';
const objeto = {
    message: 'objeto',
    title: 'testing objeto'
}
const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = () => {
    return <>
        <h1>{ message }</h1>
        {/* <h3>{ JSON.stringify(objeto) }</h3> */}
        <span> {getResult(1, 4)} </span>
        <p>soy un subtitulo</p>    
    </>
    
}