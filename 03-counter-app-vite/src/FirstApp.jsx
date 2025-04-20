import PropTypes from 'prop-types'; // si se use vite, se debe instalar manualmente

const message = 'First App!!';
const objeto = {
    message: 'objeto',
    title: 'testing objeto'
}
const getResult = (a, b) => {
    return a + b;
}

//fragment permite agrupar más de un elemento html bajo el mismo padre
// se debe importar fragment de react
// una alternatica es usar <></> (un sínonimo de fragment)

// una regla de react es que si la variable no se está cambiando o no está relacionado a un hook
// debería ir fuera del functional component.
// Beneficios: reacto no reprocesa o re renderiza lo que está fuera del functional component
// objetos no se pueden renderizar


// es raro que las props se usen de esta maner, por lo general se destructura
// export const FirstApp = (props) => {
export const FirstApp = ({ title, subTitle, name }) => {
    return <>
        {/* <h1>{ message }</h1> */}
        {/* <h3>{ JSON.stringify(objeto) }</h3> */}
        {/* <span> {getResult(1, 4)} </span> */}
        {/* <p>soy un subtitulo</p> */}
        <h1>{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
    
}

// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops
// In React 19, we’re removing the propType checks from the React package, and using them will be silently ignored. If you’re using propTypes, we recommend migrating to TypeScript or another type-checking solution.
// We’re also removing defaultProps from function components in place of ES6 default parameters. Class components will continue to support defaultProps since there is no ES6 alternative.

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
    // subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    // title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Gon Freecs'
}